// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sanity({
    projectId: 'n4olvw93',
    dataset: 'production',
    useCdn: false, 
    apiVersion: "2025-09-20", 
    studioBasePath: '/studio'
  }), react()]
});