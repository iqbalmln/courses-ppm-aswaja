// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "nuxt-swiper", "@nuxt/image"],
  image: {
    dir: "assets/images",
  },
  css: ["@/assets/css/main.css"],
});
