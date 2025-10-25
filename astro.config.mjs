// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// export default defineConfig({
//   site: "https://vanshikasaxena123.github.io", // your repo URL
//   base: "/terrible-ui/",
//   vite: {
//     plugins: [tailwindcss()]
//   },
//   outDir: "./dist",
// });

// Detect if you're in production (on GitHub Pages)
const isProd = process.env.NODE_ENV === "production";

// In production, set the base to match your repo name
// Locally, leave it blank so links and images work
export default defineConfig({
  site: "https://yourusername.github.io/",
  base: isProd ? "/terrible-ui/" : "/",
  vite: {
    plugins: [tailwindcss()]
  },
});