import { defineConfig } from 'astro/config';
  import tailwind from '@tailwindcss/vite';
  import sitemap from '@astrojs/sitemap';

  export default defineConfig({
    integrations: [sitemap()],
    vite: {
      plugins: [tailwind()],
    },
    site: 'https://vrinteriors.in',
    compressHTML: true,
    build: {
      inlineStylesheets: 'auto',
    },
  });
