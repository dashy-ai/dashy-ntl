// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    // config: {},
    injectPosition: 0,
    viewer: true,
  },
  colorMode: {
    classSuffix: '',
    preference: 'dark'
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    firebaseKey: 'fallback-private',
    // Keys within public, will be also exposed to the client-side
    public: {
      firebaseKey: 'fallback-public'
    }
  }
})
