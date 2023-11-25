import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://regal-biscochitos-3a9c3c.netlify.app/",
  integrations: [preact()]
});