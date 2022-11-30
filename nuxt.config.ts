export default defineNuxtConfig({
  modules: ["@nuxt/content", "@sidebase/nuxt-session", "@nuxtjs/google-fonts"],
  session: {
    session: {
      expiryInSeconds: 86400,
    },
  },
  typescript: {
    shim: false,
    strict: true,
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
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
