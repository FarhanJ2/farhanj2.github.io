import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [astroImageTools, tailwind()],
  site: 'https://farhanj2.github.io/',
  integrations: [react()]
});