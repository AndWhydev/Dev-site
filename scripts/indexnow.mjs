#!/usr/bin/env node
/**
 * Ping IndexNow (Bing, Yandex, Seznam, Naver, Yep) with URLs from the live
 * sitemap, or with URLs passed as arguments. Bing's index feeds Copilot and
 * ChatGPT search. Google does not use IndexNow.
 * Usage: node scripts/indexnow.mjs [url ...]
 */
const host = 'www.awlabs.com.au';
const key = 'a9f014b59ab97e8462f106cbd1aa4666';
let urls = process.argv.slice(2);
if (!urls.length) {
  const xml = await (await fetch(`https://${host}/sitemap-0.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList: urls }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urls.length} URLs`);
