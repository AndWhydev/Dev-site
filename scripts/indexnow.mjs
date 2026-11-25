#!/usr/bin/env node
/**
 * Post-deploy IndexNow ping (Bing, Yandex, Seznam, Naver, Yep). Bing's index
 * feeds Copilot and ChatGPT search. Google does not use IndexNow.
 *
 * Run after a production deploy has finished:
 *   npm run indexnow             submit URLs whose sitemap lastmod changed
 *   npm run indexnow -- --all    submit every sitemap URL
 *   npm run indexnow -- <url..>  submit just these URLs
 *   add --dry-run to print the list without submitting
 *
 * It compares the LIVE sitemap with src/data/indexnow-submitted.json (the
 * lastmod each URL had when last submitted), submits new and changed URLs,
 * then updates that file. Commit it so the next run only sends changes.
 * The key file is public/<key>.txt, served at the site root.
 */
import fs from 'node:fs';

const host = 'www.awlabs.com.au';
const key = 'a9f014b59ab97e8462f106cbd1aa4666';
const STATE = 'src/data/indexnow-submitted.json';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const all = args.includes('--all');
const explicit = args.filter((a) => !a.startsWith('--'));

async function liveSitemap() {
  const index = await (await fetch(`https://${host}/sitemap-index.xml`)).text();
  const maps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const entries = new Map();
  for (const map of maps) {
    const xml = await (await fetch(map)).text();
    for (const m of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
      const loc = m[1].match(/<loc>([^<]+)<\/loc>/)?.[1];
      const lastmod = m[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] ?? '';
      if (loc) entries.set(loc, lastmod.slice(0, 10));
    }
  }
  return entries;
}

const state = fs.existsSync(STATE) ? JSON.parse(fs.readFileSync(STATE, 'utf8')) : {};
let urls = explicit;
let live = new Map();
if (!urls.length) {
  live = await liveSitemap();
  urls = [...live].filter(([u, d]) => all || state[u] !== d).map(([u]) => u);
}

if (!urls.length) {
  console.log('IndexNow: no changed URLs since the last submission.');
  process.exit(0);
}
console.log(`IndexNow: ${urls.length} URL(s)${dryRun ? ' (dry run)' : ''}`);
if (dryRun) {
  urls.forEach((u) => console.log(`  ${u}`));
  process.exit(0);
}

// The API accepts up to 10,000 URLs per request.
for (let i = 0; i < urls.length; i += 10000) {
  const batch = urls.slice(i, i + 10000);
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList: batch }),
  });
  console.log(`IndexNow: ${res.status} ${res.statusText} for ${batch.length} URLs`);
  if (!res.ok) process.exit(1);
}

if (live.size) {
  const next = Object.fromEntries([...live].sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(STATE, JSON.stringify(next, null, 2) + '\n');
  console.log(`Updated ${STATE}; commit it.`);
}
