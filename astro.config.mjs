// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import tailwindcss from '@tailwindcss/vite';

const { SANITY_API_TOKEN } = loadEnv(
  process.env.NODE_ENV || 'development',
  process.cwd(),
  '',
);
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sanity({
      projectId: 'n4olvw93',
      dataset: 'production',
      useCdn: true,
      apiVersion: '2025-09-20',
      studioBasePath: '/studio',
      token: SANITY_API_TOKEN,
    }),
    react(),
  ],

  output: 'server',
  adapter: cloudflare(),
});
