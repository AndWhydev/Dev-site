#!/usr/bin/env node
/**
 * Weekly site health check. Crawls every page in the live sitemap (or a local
 * build) and writes reports/site-health-YYYY-MM-DD.md.
 *
 *   npm run health                      check https://www.awlabs.com.au
 *   npm run health -- --dist            check the local build in dist/
 *   npm run health -- --base <url>      check another host (e.g. a preview)
 *
 * Checks: sitemap URL count and non-200 sitemap URLs, broken internal links
 * (with the pages that link to them), pages missing a meta description,
 * long-form pages missing the answer block, JSON-LD that fails to parse or
 * misses required properties, and pages whose lastmod is over 90 days old.
 * No dependencies; read-only.
 */
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const opt = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : undefined);
const useDist = args.includes('--dist');
const SITE = 'https://www.awlabs.com.au';
const BASE = (opt('--base') ?? SITE).replace(/\/$/, '');
const STALE_DAYS = 90;
const CONCURRENCY = 6;
const today = new Date().toISOString().slice(0, 10);

/* ---------- fetching (live) or reading (dist) ---------- */

function distFile(url) {
  const p = new URL(url, SITE).pathname.replace(/\/$/, '') || '/';
  const candidates = p === '/' ? ['index.html'] : [`${p.slice(1)}/index.html`, `${p.slice(1)}.html`, p.slice(1)];
  return candidates.map((c) => path.join('dist', decodeURIComponent(c))).find((f) => fs.existsSync(f) && fs.statSync(f).isFile());
}

async function get(url) {
  if (useDist) {
    const f = distFile(url);
    return f ? { status: 200, body: fs.readFileSync(f, 'utf8'), type: f.endsWith('.html') ? 'text/html' : '' } : { status: 404, body: '' };
  }
  const target = url.replace(SITE, BASE);
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(target, { redirect: 'manual', headers: { 'User-Agent': 'AWLabs-site-health/1.0' } });
      const type = res.headers.get('content-type') ?? '';
      const body = type.includes('html') || type.includes('xml') ? await res.text() : '';
      return { status: res.status, body, type, location: res.headers.get('location') };
    } catch (e) {
      if (attempt === 2) return { status: 0, body: '', error: String(e.message || e) };
      await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
    }
  }
}

async function pool(items, fn) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (i < items.length) {
        const n = i++;
        out[n] = await fn(items[n], n);
      }
    }),
  );
  return out;
}

/* ---------- sitemap ---------- */

async function sitemap() {
  const index = await get(`${SITE}/sitemap-index.xml`);
  const maps = [...index.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const urls = new Map();
  for (const map of maps) {
    const xml = (await get(map)).body;
    for (const m of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
      const loc = m[1].match(/<loc>([^<]+)<\/loc>/)?.[1];
      if (loc) urls.set(loc.replace(/\/$/, '') || SITE, m[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]?.slice(0, 10) ?? '');
    }
  }
  return urls;
}

/* ---------- JSON-LD checks ---------- */

const REQUIRED = {
  Organization: ['name', 'url'],
  ProfessionalService: ['name', 'address', 'telephone'],
  LocalBusiness: ['name', 'address'],
  WebSite: ['name', 'url'],
  Article: ['headline', 'author', 'datePublished', 'publisher'],
  Person: ['name'],
  Service: ['name', 'provider'],
  FAQPage: ['mainEntity'],
  BreadcrumbList: ['itemListElement'],
  ItemList: ['itemListElement'],
  VideoObject: ['name', 'description', 'thumbnailUrl', 'uploadDate'],
};

function checkNode(node, where, problems) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) return node.forEach((n) => checkNode(n, where, problems));
  const type = [node['@type']].flat()[0];
  for (const k of REQUIRED[type] ?? []) {
    const v = node[k];
    if (v === undefined || v === null || v === '' || (Array.isArray(v) && !v.length)) problems.push(`${where}: ${type} missing "${k}"`);
  }
  if (type === 'FAQPage') {
    for (const q of [node.mainEntity].flat()) {
      if (!q?.name || !q?.acceptedAnswer?.text) problems.push(`${where}: FAQPage question missing name or answer text`);
    }
  }
  if (type === 'BreadcrumbList') {
    [node.itemListElement].flat().forEach((li, i) => {
      if (li?.position !== i + 1 || !li?.name) problems.push(`${where}: BreadcrumbList item ${i + 1} missing position or name`);
    });
  }
  // Self-serving review markup is ignored by Google and risks a manual action.
  if (['Organization', 'ProfessionalService', 'LocalBusiness'].includes(type) && (node.aggregateRating || node.review)) {
    problems.push(`${where}: ${type} carries aggregateRating/review (self-serving review markup)`);
  }
  for (const [k, v] of Object.entries(node)) if (k !== '@context' && typeof v === 'object') checkNode(v, where, problems);
}

/* ---------- page analysis ---------- */

const LONGFORM = /^\/(guides|solutions|locations)\/[^/]+$/;

function analyse(url, html) {
  const p = new URL(url).pathname;
  const out = { links: new Set(), problems: [] };
  const robots = html.match(/<meta name="robots" content="([^"]*)"/i)?.[1] ?? '';
  out.noindex = /noindex/i.test(robots);
  const desc = html.match(/<meta name="description" content="([^"]*)"/i)?.[1]?.trim();
  out.missingDescription = !desc;
  out.missingAnswer = LONGFORM.test(p) && !/class="lf-summary/.test(html);
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      checkNode(JSON.parse(m[1]), p, out.problems);
    } catch (e) {
      out.problems.push(`${p}: JSON-LD does not parse (${e.message})`);
    }
  }
  // Links inside scripts are templates (e.g. href="${mail}"), not real links.
  const markup = html.replace(/<script\b[\s\S]*?<\/script>/gi, '');
  for (const m of markup.matchAll(/<a\s[^>]*href="([^"]+)"/gi)) {
    try {
      const u = new URL(m[1].replace(/&amp;/g, '&'), url);
      if (!/^https?:$/.test(u.protocol)) continue;
      if (u.host !== new URL(SITE).host) continue;
      u.hash = '';
      u.search = '';
      out.links.add(u.href.replace(/\/$/, '') || SITE);
    } catch {}
  }
  return out;
}

/* ---------- run ---------- */

const started = Date.now();
const map = await sitemap();
const sitemapUrls = [...map.keys()];
console.log(`Sitemap: ${sitemapUrls.length} URLs. Checking${useDist ? ' local dist/' : ` ${BASE}`}...`);

const pages = new Map(); // url -> {status, analysis}
const pageResults = await pool(sitemapUrls, async (u) => {
  const r = await get(u);
  return [u, r];
});
const linkedFrom = new Map();
for (const [u, r] of pageResults) {
  const a = r.status === 200 && r.body ? analyse(u, r.body) : null;
  pages.set(u, { status: r.status, location: r.location, a });
  for (const l of a?.links ?? []) {
    if (!linkedFrom.has(l)) linkedFrom.set(l, new Set());
    linkedFrom.get(l).add(new URL(u).pathname || '/');
  }
}

// Internal links that aren't sitemap pages: check them too (follow one redirect).
const extra = [...linkedFrom.keys()].filter((l) => !pages.has(l));
const extraResults = await pool(extra, async (u) => {
  let r = await get(u);
  if (!useDist && r.status >= 300 && r.status < 400 && r.location) {
    const next = new URL(r.location, u).href;
    r = { ...(await get(next)), redirected: next };
  }
  return [u, r];
});
const broken = [];
for (const [u, r] of extraResults) {
  // Non-HTML files (PDFs, images) come back without a body; only the status matters.
  if (r.status !== 200) broken.push({ url: u, status: r.status || r.error, from: [...linkedFrom.get(u)] });
}
for (const [u, p] of pages) {
  if (p.status !== 200 && linkedFrom.has(u)) broken.push({ url: u, status: p.status, from: [...linkedFrom.get(u)] });
}

const sitemapBad = [...pages].filter(([, p]) => p.status !== 200).map(([u, p]) => `${u} (${p.status}${p.location ? ` → ${p.location}` : ''})`);
const sitemapNoindex = [...pages].filter(([, p]) => p.a?.noindex).map(([u]) => u);
const noDesc = [...pages].filter(([, p]) => p.a?.missingDescription).map(([u]) => u);
const noAnswer = [...pages].filter(([, p]) => p.a?.missingAnswer).map(([u]) => u);
const ldProblems = [...pages].flatMap(([, p]) => p.a?.problems ?? []);
const cutoff = new Date(Date.now() - STALE_DAYS * 864e5).toISOString().slice(0, 10);
const stale = sitemapUrls.filter((u) => map.get(u) && map.get(u) < cutoff).map((u) => `${u} (${map.get(u)})`);
const noLastmod = sitemapUrls.filter((u) => !map.get(u));

/* ---------- report ---------- */

const rel = (u) => u.replace(SITE, '') || '/';
const section = (title, items, render = (x) => `- ${x}`) =>
  [`## ${title} (${items.length})`, '', items.length ? items.map(render).join('\n') : 'None.', ''].join('\n');

const issues = sitemapBad.length + broken.length + noDesc.length + noAnswer.length + ldProblems.length + sitemapNoindex.length;
const md = [
  `# Site health, ${today}`,
  '',
  `Source: ${useDist ? 'local build (dist/)' : BASE}. Sitemap URLs: **${sitemapUrls.length}**. Internal link targets checked: ${linkedFrom.size}. Took ${Math.round((Date.now() - started) / 1000)}s.`,
  '',
  `**${issues === 0 ? 'No problems found.' : `${issues} problem(s) found.`}** Pages not updated in ${STALE_DAYS} days: ${stale.length}.`,
  '',
  '| Check | Count |',
  '|---|---|',
  `| Sitemap URLs | ${sitemapUrls.length} |`,
  `| Sitemap URLs not returning 200 | ${sitemapBad.length} |`,
  `| Sitemap URLs marked noindex | ${sitemapNoindex.length} |`,
  `| Broken internal links | ${broken.length} |`,
  `| Pages missing a meta description | ${noDesc.length} |`,
  `| Guides, solutions and locations missing the answer block | ${noAnswer.length} |`,
  `| JSON-LD problems | ${ldProblems.length} |`,
  `| Sitemap URLs without lastmod | ${noLastmod.length} |`,
  `| Not updated in ${STALE_DAYS} days (lastmod before ${cutoff}) | ${stale.length} |`,
  '',
  section('Sitemap URLs not returning 200', sitemapBad),
  section('Sitemap URLs marked noindex', sitemapNoindex.map(rel)),
  section('Broken internal links', broken, (b) => `- ${rel(b.url)} (${b.status}), linked from ${b.from.slice(0, 8).join(', ')}${b.from.length > 8 ? ` and ${b.from.length - 8} more` : ''}`),
  section('Pages missing a meta description', noDesc.map(rel)),
  section('Guides, solutions and locations missing the answer block', noAnswer.map(rel)),
  section('JSON-LD problems', ldProblems),
  section('Sitemap URLs without lastmod', noLastmod.map(rel)),
  section(`Not updated in ${STALE_DAYS} days`, stale.map(rel)),
].join('\n');

fs.mkdirSync('reports', { recursive: true });
const out = `reports/site-health-${today}.md`;
fs.writeFileSync(out, md);
console.log(`${issues} problem(s), ${stale.length} stale page(s). Wrote ${out}`);
