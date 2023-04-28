// nuxt.config.ts
export default defineNuxtConfig({
  modules: ["@unocss/nuxt"],
  app: {
    baseURL: "/nuxt-sandbox/", // baseURL: '/<repository>/'
  },
  ssr: false, //server side rendered enabled //When true
})
