// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "id",
      },
      title:
        "LPK Aswaja Nusantara Career Development Center",
      meta: [
        {
          name: "description",
          content:
            "LPK Aswaja Nusantara Career Development Center merupakan buah yang lahir dari rahim Pesantren Pelajar-Mahasiswa Aswaja Nusantara. Dalam sejarahnya, pesantren dan madrasah telah berkiprah sejak jauh sebelum kata Indonesia dikenal, fase perjuangan bangsa, menjaga dan meningkatkan intelektualitas bangsa, pengembangan ilmu pengetahuan, ikut menyelesaikan persoalan-persoalan sosial-kemasyarakatan dan kebangsaan dengan spirit dan basis nilai keislaman tanpa tercerabut dari nilai-nilai luhur budaya bangsa.",
        },
      ],
    },
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
