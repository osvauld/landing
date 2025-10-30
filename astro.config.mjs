import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://osvauld.com",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "ru", "zh", "fr", "es", "ja", "ml", "hi", "kn", "ta", "te", "mr", "ur", "ar", "ko"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(), 
    tailwind(), 
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
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
          ml: "ml",
          hi: "hi",
          kn: "kn",
          ta: "ta",
          te: "te",
          mr: "mr",
          ur: "ur",
          ar: "ar",
          ko: "ko",
        },
      },
    })
  ],
});
