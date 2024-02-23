// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      Roboto: true,
    },
  },
});
