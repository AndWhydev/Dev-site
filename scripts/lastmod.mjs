// Real "last updated" dates for <lastmod> in the sitemap. Never the build date.
//
//   Long-form pages (src/content/{guides,solutions,locations}): frontmatter `updated`.
//   Collection index pages: the newer of the index file's last commit and its newest entry.
//   Every other page (src/pages/**/*.astro): the last git commit that touched that file.
//
// Vercel clones shallowly, so git dates there would be wrong. The build uses
// git only when the clone has full history, and otherwise reads
// src/data/lastmod.json. Refresh that file before pushing:
//
//   npm run lastmod
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const SITE = 'https://www.awlabs.com.au';
const JSON_PATH = 'src/data/lastmod.json';
const COLLECTIONS = ['guides', 'solutions', 'locations'];

function sh(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return '';
  }
}

const fullHistory = () => sh('git rev-parse --is-shallow-repository') === 'false';
const gitDate = (file) => sh(`git log -1 --format=%cs -- "${file}"`);

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}

/** Frontmatter dates and noindex flags for every long-form page. */
export function readContent() {
  const lastmod = new Map();
  const noindexed = new Set();
  for (const dir of COLLECTIONS) {
    const base = path.join('src/content', dir);
    if (!fs.existsSync(base)) continue;
    for (const f of fs.readdirSync(base).filter((n) => n.endsWith('.md'))) {
      const front = fs.readFileSync(path.join(base, f), 'utf8').split(/^---\s*$/m)[1] ?? '';
      const url = `${SITE}/${dir}/${f.replace(/\.md$/, '')}`;
      const m = front.match(/^updated:\s*"?(\d{4}-\d{2}-\d{2})/m);
      if (m) lastmod.set(url, m[1]);
      if (/^noindex:\s*true\s*$/m.test(front)) noindexed.add(url);
    }
  }
  return { lastmod, noindexed };
}

/** Git dates for static .astro pages, keyed by URL. */
export function gitPageDates() {
  const out = {};
  for (const file of walk('src/pages').filter((f) => f.endsWith('.astro'))) {
    const rel = file.replace(/\\/g, '/').replace(/^src\/pages\//, '').replace(/\.astro$/, '');
    if (rel.includes('[') || rel.split('/').some((s) => s.startsWith('_'))) continue;
    const route = rel === 'index' ? '' : '/' + rel.replace(/\/index$/, '');
    const d = gitDate(file);
    if (d) out[`${SITE}${route}`] = d;
  }
  return out;
}

/** URL -> YYYY-MM-DD for every page with a real date. */
export function buildLastmod() {
  const { lastmod, noindexed } = readContent();
  let pages = {};
  if (fullHistory()) pages = gitPageDates();
  else if (fs.existsSync(JSON_PATH)) pages = JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));
  for (const [url, d] of Object.entries(pages)) lastmod.set(url, d);

  // A collection index changes whenever an entry does.
  for (const dir of COLLECTIONS) {
    const idx = `${SITE}/${dir}`;
    let newest = lastmod.get(idx) ?? '';
    for (const [url, d] of lastmod) if (url.startsWith(`${idx}/`) && d > newest) newest = d;
    if (newest) lastmod.set(idx, newest);
  }
  return { lastmod, noindexed };
}

// `node scripts/lastmod.mjs` writes the git dates for the Vercel build.
if (import.meta.url === `file://${process.argv[1]}`) {
  if (!fullHistory()) {
    console.error('Shallow clone: run this where the repo has full git history.');
    process.exit(1);
  }
  const pages = gitPageDates();
  const sorted = Object.fromEntries(Object.entries(pages).sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(JSON_PATH, JSON.stringify(sorted, null, 2) + '\n');
  console.log(`Wrote ${Object.keys(sorted).length} page dates to ${JSON_PATH}`);
}
