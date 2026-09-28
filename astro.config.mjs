// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.awlabs.com.au',
  // Vercel serves www as primary. No trailing slash, matching internal links;
  // vercel.json redirects the slash variants so each page has one URL.
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/welcome') && !page.includes('/how-we-work') && !page.includes('/demos/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
