import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://vrinteriors.in',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});