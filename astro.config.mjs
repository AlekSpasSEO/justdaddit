import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alekspasseo.github.io',
  base: '/justdaddit',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
