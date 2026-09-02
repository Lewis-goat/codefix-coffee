import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL in Cloudflare Pages env once the domain is registered.
const site = process.env.SITE_URL || 'https://example.com';

export default defineConfig({
  site,
  integrations: [sitemap()],
  trailingSlash: 'ignore',
});
