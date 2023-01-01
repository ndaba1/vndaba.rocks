import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";
import partytown from "@astrojs/partytown";

const __dirname = path.dirname(fileURLToPath(import.meta.url));



// https://astro.build/config
export default defineConfig({
  site: "https://vndaba.rocks",
  base: "/",
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), react(), mdx(), image(), sitemap(), partytown()],
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src")
      }
    }
  },
  markdown: {
    syntaxHighlight: "prism"
  }
});