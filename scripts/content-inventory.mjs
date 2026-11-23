#!/usr/bin/env node
/**
 * Content inventory and thin page check, read from the built site.
 * Usage: npm run build && node scripts/content-inventory.mjs
 *
 * Writes reports/content-inventory.csv (one row per page; not published) and
 * reports/thin-solutions.md: /solutions pages under 600 words, or sharing
 * more than 60% of their text with another /solutions page (5 word shingles,
 * measured on the article body so the shared page template doesn't count).
 */
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://www.awlabs.com.au';
const DIST = 'dist';
const OUT = 'reports';
const MIN_WORDS = 600;
const MAX_OVERLAP = 0.6;

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
  });

const decode = (s) =>
  s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;|&rsquo;|&lsquo;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n))
    .replace(/&[a-z]+;/g, ' ');
const text = (html) =>
  decode(html.replace(/<(script|style|noscript|svg|template)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ').trim();
const words = (t) => (t ? t.split(' ').filter((w) => /[A-Za-z0-9]/.test(w)) : []);
const pick = (html, re) => html.match(re)?.[1] ?? '';
const norm = (href) => {
  try {
    const u = new URL(href, SITE);
    if (u.origin !== SITE) return null;
    return SITE + (u.pathname.replace(/\/+$/, '') || '');
  } catch {
    return null;
  }
};

const sitemap = new Set();
for (const f of fs.readdirSync(DIST).filter((n) => /^sitemap-\d+\.xml$/.test(n)))
  for (const m of fs.readFileSync(path.join(DIST, f), 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)) sitemap.add(m[1].replace(/\/$/, ''));
const lastmod = new Map();
for (const f of fs.readdirSync(DIST).filter((n) => /^sitemap-\d+\.xml$/.test(n)))
  for (const m of fs.readFileSync(path.join(DIST, f), 'utf8').matchAll(/<loc>(.*?)<\/loc>\s*<lastmod>(.*?)<\/lastmod>/g))
    lastmod.set(m[1].replace(/\/$/, ''), m[2].slice(0, 10));

// Pages left out of the sitemap still have a git date.
const gitDates = fs.existsSync('src/data/lastmod.json') ? JSON.parse(fs.readFileSync('src/data/lastmod.json', 'utf8')) : {};

const pages = [];
for (const file of walk(DIST)) {
  const rel = path.relative(DIST, file).replace(/\\/g, '/').replace(/(^|\/)index\.html$/, '').replace(/\.html$/, '');
  if (rel === '404') continue;
  const url = SITE + (rel ? `/${rel}` : '');
  const html = fs.readFileSync(file, 'utf8');
  const main = pick(html, /<main[^>]*>([\s\S]*?)<\/main>/i) || html;
  const article = pick(html, /<article class="lf-article[^"]*"[^>]*>([\s\S]*?)<\/article>/i);
  const robots = pick(html, /<meta name="robots" content="([^"]*)"/i);

  let author = '';
  let modified = '';
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      for (const node of [JSON.parse(m[1])].flat()) {
        if (node.author?.name) author ||= `${node.author.name} (${node.author['@type']})`;
        if (node.dateModified) modified ||= node.dateModified;
      }
    } catch {}
  }
  const links = new Set();
  for (const m of main.matchAll(/<a\s[^>]*href="([^"#?]*)[^"]*"/gi)) {
    const t = norm(m[1]);
    if (t && t !== url) links.add(t);
  }
  // Links in header and footer count too, since crawlers follow them.
  for (const m of html.replace(main, '').matchAll(/<a\s[^>]*href="([^"#?]*)[^"]*"/gi)) {
    const t = norm(m[1]);
    if (t && t !== url) links.add(t);
  }
  pages.push({
    url,
    title: decode(pick(html, /<title>([\s\S]*?)<\/title>/i)).trim(),
    h1: text(pick(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i)),
    words: words(text(main)).length,
    body: text(article || main),
    updated: modified || lastmod.get(url) || gitDates[url] || '',
    author:
      author ||
      (/class="lf-byline-name"[^>]*>By <a[^>]*>([^<]+)</.exec(html)?.[1]?.concat(' (byline; Service schema)') ?? 'AWLabs (Organization)'),
    links,
    inSitemap: sitemap.has(url),
    indexable: !/noindex/i.test(robots),
  });
}

const inbound = new Map(pages.map((p) => [p.url, 0]));
for (const p of pages) for (const t of p.links) if (inbound.has(t)) inbound.set(t, inbound.get(t) + 1);

const csv = (v) => (/[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
const rows = [['URL', 'Title', 'H1', 'Word count', 'Last updated', 'Author', 'Internal links pointing to it', 'In sitemap', 'Indexable']];
for (const p of pages.sort((a, b) => a.url.localeCompare(b.url)))
  rows.push([p.url, p.title, p.h1, p.words, p.updated, p.author, inbound.get(p.url), p.inSitemap ? 'yes' : 'no', p.indexable ? 'yes' : 'no']);
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'content-inventory.csv'), rows.map((r) => r.map(csv).join(',')).join('\n') + '\n');

// Thin and overlapping /solutions pages.
const shingles = (t) => {
  const w = words(t.toLowerCase().replace(/[^a-z0-9' ]+/g, ' '));
  const s = new Set();
  for (let i = 0; i + 5 <= w.length; i++) s.add(w.slice(i, i + 5).join(' '));
  return s;
};
const sol = pages.filter((p) => p.url.startsWith(`${SITE}/solutions/`)).map((p) => ({
  ...p,
  bodyWords: words(p.body).length,
  sh: shingles(p.body),
}));
const flagged = [];
for (const a of sol) {
  let best = { url: '', share: 0 };
  for (const b of sol) {
    if (a === b || !a.sh.size) continue;
    let n = 0;
    for (const s of a.sh) if (b.sh.has(s)) n++;
    const share = n / a.sh.size;
    if (share > best.share) best = { url: b.url, share };
  }
  const reasons = [];
  if (a.bodyWords < MIN_WORDS) reasons.push(`${a.bodyWords} words`);
  if (best.share > MAX_OVERLAP) reasons.push(`${Math.round(best.share * 100)}% shared with ${best.url.replace(SITE, '')}`);
  a.best = best;
  if (reasons.length) flagged.push({ url: a.url.replace(SITE, ''), reasons });
}
const maxShare = Math.max(0, ...sol.map((a) => a.best.share));
const md = [
  '# Thin or overlapping /solutions pages',
  '',
  `Generated by scripts/content-inventory.mjs from the built site. ${sol.length} solutions pages checked.`,
  `Rule: article body under ${MIN_WORDS} words, or more than ${MAX_OVERLAP * 100}% of its 5 word phrases shared with another solutions page.`,
  `Highest overlap found between any two solutions pages: ${Math.round(maxShare * 100)}%.`,
  '',
  flagged.length ? '| Page | Why |\n|---|---|\n' + flagged.map((f) => `| ${f.url} | ${f.reasons.join('; ')} |`).join('\n') : 'None flagged.',
  '',
  '## All solutions pages by body word count',
  '',
  '| Page | Body words | Words on page | Highest overlap |',
  '|---|---|---|---|',
  ...sol
    .sort((a, b) => a.bodyWords - b.bodyWords)
    .map((a) => `| ${a.url.replace(SITE, '')} | ${a.bodyWords} | ${a.words} | ${Math.round(a.best.share * 100)}% (${a.best.url.replace(SITE, '')}) |`),
  '',
];
fs.writeFileSync(path.join(OUT, 'thin-solutions.md'), md.join('\n'));
console.log(`${pages.length} pages -> ${OUT}/content-inventory.csv; ${flagged.length} of ${sol.length} solutions pages flagged -> ${OUT}/thin-solutions.md`);
