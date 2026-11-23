// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';

// Map long-form page URLs to their frontmatter `updated` date for <lastmod>.
// Only pages with a real, maintained date get one (Google ignores unreliable lastmod).
const lastmod = new Map();
const noindexed = new Set();
for (const dir of ['guides', 'solutions', 'locations']) {
  const base = path.join('src/content', dir);
  if (!fs.existsSync(base)) continue;
  for (const f of fs.readdirSync(base).filter((n) => n.endsWith('.md'))) {
    const m = fs.readFileSync(path.join(base, f), 'utf8').match(/^updated:\s*"?(\d{4}-\d{2}-\d{2})/m);
    const src = fs.readFileSync(path.join(base, f), 'utf8');
    const url = `https://www.awlabs.com.au/${dir}/${f.replace(/\.md$/, '')}`;
    if (m) lastmod.set(url, m[1]);
    if (/^noindex:\s*true\s*$/m.test(src.split(/^---\s*$/m)[1] ?? '')) noindexed.add(url);
  }
}

export default defineConfig({
  site: 'https://www.awlabs.com.au',
  // Vercel serves www as primary. No trailing slash, matching internal links;
  // vercel.json redirects the slash variants so each page has one URL.
  trailingSlash: 'never',
  // Inline page CSS: removes four render-blocking stylesheet round trips
  // before first paint (measured ~2s of LCP render delay on mobile).
  build: { inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      filter: (page) =>
        !/\/(welcome|how-we-work|MSA|terms|NDA|thank-you)(\/|$)/.test(new URL(page).pathname) &&
        !noindexed.has(page.replace(/\/$/, '')),
      serialize: (item) => {
        const d = lastmod.get(item.url.replace(/\/$/, ''));
        return d ? { ...item, lastmod: d } : item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
