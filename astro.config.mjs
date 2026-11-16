import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Placeholder canonical site URL until the owner maps a custom domain.
export default defineConfig({
  site: 'https://andreikocherzhinskii.dev',
  integrations: [sitemap()],
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  build: { inlineStylesheets: 'auto' },
});
