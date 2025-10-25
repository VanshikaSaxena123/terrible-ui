// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://vanshikasaxena123.github.io", // your repo URL
  base: "/terrible-ui/",
  vite: {
    plugins: [tailwindcss()]
  },
  outDir: "./dist",
});