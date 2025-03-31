export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  modules: ["@builder.io/sdk-vue/nuxt"],
  builder: {
    apiKey: "18f4bfa5c3f84662ab0f37aab777721a",
  },
  // Add these configurations for CORS issues
  nitro: {
    devProxy: {
      "/api": {
        target: "https://cdn.builder.io/api",
        changeOrigin: true,
        prependPath: false,
      },
    },
  },
  // Handle CSP for iframe content
  app: {
    head: {
      meta: [
        {
          name: 'Content-Security-Policy',
          content: "frame-ancestors 'self' https://builder.io"
        }
      ]
    }
  },
  compatibilityDate: "2025-03-21",
});