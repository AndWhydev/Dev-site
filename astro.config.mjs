// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://awlabs.com.au',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/welcome'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
