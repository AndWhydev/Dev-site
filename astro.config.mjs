// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { buildLastmod } from './scripts/lastmod.mjs';

// <lastmod> comes from each page's real updated date (frontmatter or last
// git commit), never the build date. See scripts/lastmod.mjs.
const { lastmod, noindexed } = buildLastmod();

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
        !/\/(welcome|how-we-work|MSA|terms|NDA|thank-you|client-pack)(\/|$)/.test(new URL(page).pathname) &&
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
