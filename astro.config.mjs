import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://osvauld.com",
  // Pages are served without a trailing slash (wrangler.jsonc html_handling).
  trailingSlash: "never",
  integrations: [sitemap()],
});
