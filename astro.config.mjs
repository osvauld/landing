import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import starlight from "@astrojs/starlight";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://osvauld.com",
  integrations: [react(), tailwind(), starlight({
    title: "Docs at a subpath"
  }), sitemap()]
});