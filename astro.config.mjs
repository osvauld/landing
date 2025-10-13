import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://osvauld.com",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "ru", "zh", "fr", "es", "ja"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(), 
    tailwind(), 
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          de: "de",
          ru: "ru",
          zh: "zh",
          fr: "fr",
          es: "es",
          ja: "ja",
        },
      },
    })
  ],
  image: { service: { entrypoint: "astro/assets/services/squoosh" } },
});
