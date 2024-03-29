import * as dotenv from "dotenv";
dotenv.config();

export default defineNuxtConfig({
  modules: [
    "@nuxt/devtools",
    "../src/module",
  ],
  {{{{moduleConfigKey}}}}: {
    // @TODO
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  typescript: {
    strict: true,
  },
  devServer: {
    port: parseInt(process.env.APP_PORT || "3000"),
  },
  vite: {
    server: {
      hmr: {
        port: parseInt(process.env.WEBSOCKET_PORT || "24678"),
      },
    },
  },
  devtools: { enabled: true },
});
