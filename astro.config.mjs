import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://axomiya-it-labs.github.io',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-IN', as: 'as-IN' },
      },
      filter: (page) => !page.includes('/og/'),
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'as'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});