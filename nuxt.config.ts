// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      apiUsersUrl: process.env.NUXT_API_USERS_URL,
    },
  },

  modules: ["@nuxtjs/ionic", "@nuxtjs/i18n", "@pinia/nuxt"],

  ionic: {
    integrations: {
      router: false,
    },
  },

  i18n: {
    locales: [
      {
        code: "en",
        iso: "en",
        dir: "ltr",
        file: "en.ts",
      },
      {
        code: "uk",
        iso: "uk",
        dir: "ltr",
        file: "uk.ts",
      },
    ],
    lazy: true,
    langDir: "lang",
    strategy: "prefix",
    defaultLocale: "en",
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
  },
});
