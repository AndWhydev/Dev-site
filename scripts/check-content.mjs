#!/usr/bin/env node
/**
 * Quality gate for long-form pages (SEO-SOP.md section 7).
 * Usage: node scripts/check-content.mjs [file.md ...]   (no args = all content)
 *
 * Checks frontmatter shape and lengths, dashes, banned phrases, github links,
 * internal links that don't resolve to a known page, risky claim words, word
 * count, and 5-word-shingle overlap between pages.
 */
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const contentDir = path.join(root, 'src/content');
const pagesDir = path.join(root, 'src/pages');

function walk(dir, ext) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    return d.isDirectory() ? walk(p, ext) : p.endsWith(ext) ? [p] : [];
  });
}

// Known routes: static pages, content entries, plus planned pages from the plan.
const known = new Set(['/']);
for (const f of walk(pagesDir, '.astro')) {
  const rel = path.relative(pagesDir, f).replace(/\\/g, '/').replace(/\.astro$/, '');
  if (rel.includes('[')) continue;
  known.add('/' + rel.replace(/(^|\/)index$/, '').replace(/\/$/, ''));
}
const allMd = walk(contentDir, '.md');
for (const f of allMd) {
  const rel = path.relative(contentDir, f).replace(/\\/g, '/').replace(/\.md$/, '');
  known.add('/' + rel);
}
const planPath = path.join(root, 'docs-internal/seo-page-plan.md');
if (fs.existsSync(planPath)) {
  const plan = fs.readFileSync(planPath, 'utf8');
  const section = { guides: '/guides/', solutions: '/solutions/', locations: '/locations/', services: '/services/' };
  let cur = null;
  for (const line of plan.split('\n')) {
    if (/^## Guides/.test(line)) cur = section.guides;
    else if (/^## Solutions/.test(line)) cur = section.solutions;
    else if (/^## Locations/.test(line)) cur = section.locations;
    else if (/^## New service pages/.test(line)) cur = section.services;
    else if (/^## /.test(line)) cur = null;
    const m = line.match(/^\| ([a-z0-9-]+) \|/);
    if (cur && m && m[1] !== 'slug') known.add(cur + m[1]);
  }
  for (const m of plan.matchAll(/\| (\/[a-z0-9/-]+) \|/g)) known.add(m[1]);
}
['/MSA', '/NDA', '/editorial-policy', '/team/andy-taleb', '/industries/manufacturing'].forEach((u) => known.add(u));

const BANNED = [
  /—/, /–/, /in today's (fast-paced|digital)/i, /\bunlock(s|ing)?\b/i, /\bseamless(ly)?\b/i,
  /cutting-edge/i, /game.?changer/i, /\bleverag(e|es|ing)\b/i, /\brevolutioni[sz]e/i, /\bdelve\b/i,
];
const RISKY = /\b(certified|accredited|guarantee[ds]?|compliant|award-winning|leading|trusted by|our clients|we helped|case study)\b/gi;

const targets = process.argv.slice(2).length ? process.argv.slice(2).map((p) => path.resolve(p)) : allMd;
const shingles = new Map();
const bodyText = (md) =>
  md.replace(/```[\s\S]*?```/g, ' ').replace(/\|[^\n]*\|/g, ' ').replace(/[#*_>`[\]()]/g, ' ').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
function shingleSet(words) {
  const s = new Set();
  for (let i = 0; i + 5 <= words.length; i++) s.add(words.slice(i, i + 5).join(' '));
  return s;
}
for (const f of allMd) {
  const raw = fs.readFileSync(f, 'utf8');
  const body = raw.replace(/^---[\s\S]*?---/, '');
  shingles.set(f, shingleSet(bodyText(body)));
}

let problems = 0;
const report = (f, msg) => { problems++; console.log(`  ✗ ${msg}`); };

for (const f of targets) {
  const rel = path.relative(root, f);
  console.log(rel);
  const raw = fs.readFileSync(f, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) { report(f, 'missing frontmatter'); continue; }
  let fm;
  try { fm = yaml.load(m[1]); } catch (e) { report(f, 'YAML error: ' + e.message.split('\n')[0]); continue; }
  const body = m[2];
  const kind = rel.split(path.sep).includes('guides') ? 'guides' : rel.split(path.sep).includes('solutions') ? 'solutions' : 'locations';

  for (const k of ['title', 'metaTitle', 'description', 'eyebrow', 'published', 'updated', 'summary', 'takeaways']) if (!fm[k]) report(f, `missing ${k}`);
  if (kind === 'guides' && !['cost', 'compare', 'explainer', 'australia'].includes(fm.category)) report(f, 'bad/missing category');
  if (kind === 'solutions' && !(fm.industry && fm.industry.title && fm.industry.href)) report(f, 'solutions need industry {title, href}');
  if (kind === 'locations' && !(fm.city && fm.state)) report(f, 'locations need city and state');
  if (fm.metaTitle && fm.metaTitle.length > 65) report(f, `metaTitle ${fm.metaTitle.length} chars (max 65)`);
  if (fm.description && (fm.description.length < 120 || fm.description.length > 160)) report(f, `description ${fm.description.length} chars (want 120 to 160)`);
  if (Array.isArray(fm.takeaways) && (fm.takeaways.length < 3 || fm.takeaways.length > 6)) report(f, 'takeaways must be 3 to 6');
  if (fm.disclaimer && !['none', 'legal', 'tax', 'financial'].includes(fm.disclaimer)) report(f, 'bad disclaimer');
  for (const s of fm.sources || []) if (!/^https?:\/\//.test(s.url || '')) report(f, `bad source url: ${s.url}`);
  if (!(fm.sources || []).length && kind === 'guides') report(f, 'guides need sources');

  const all = raw;
  for (const b of BANNED) { const hit = all.match(b); if (hit) report(f, `banned: "${hit[0]}"`); }
  if (/github\.com/i.test(all)) report(f, 'links or mentions github.com');

  const links = [...all.matchAll(/\]\((\/[^)#\s]*)/g), ...all.matchAll(/href:\s*"(\/[^"#]*)"/g)].map((x) => x[1].replace(/\/$/, '') || '/');
  for (const l of links) if (!known.has(l)) report(f, `unknown internal link ${l}`);

  const words = bodyText(body).length;
  const min = kind === 'guides' && fm.category === 'explainer' ? 700 : kind === 'locations' ? 850 : 1000;
  if (words < min) report(f, `body only ${words} words (min ${min})`);
  const risky = [...new Set((all.match(RISKY) || []).map((w) => w.toLowerCase()))];
  if (risky.length) console.log(`  ! review claim words: ${risky.join(', ')}`);

  const mine = shingles.get(f) || shingleSet(bodyText(body));
  for (const [other, set] of shingles) {
    if (other === f || !mine.size) continue;
    let inter = 0;
    for (const s of mine) if (set.has(s)) inter++;
    const ratio = inter / Math.min(mine.size, set.size || 1);
    if (ratio > 0.2) report(f, `${Math.round(ratio * 100)}% 5-word overlap with ${path.relative(root, other)}`);
  }
  console.log(`  ${words} words, ${links.length} internal links, ${(fm.sources || []).length} sources`);
}
console.log(problems ? `\n${problems} problem(s)` : '\nAll checks passed');
process.exit(problems ? 1 : 0);
