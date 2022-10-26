export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  buildModules: ["@nuxtjs/google-fonts"],
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  },
  content: {
    highlight: {
      theme: "github-light",
    },
  },
  googleFonts: {
    families: {
      Ubuntu: true,
    },
  },
  head: {
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
});
