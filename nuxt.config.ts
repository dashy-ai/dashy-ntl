// https://v3.nuxtjs.org/api/configuration/nuxt.config

import tailwindLineclamp from '@tailwindcss/line-clamp'
import plugin from 'tailwindcss/plugin'

export default defineNuxtConfig({

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@pinia/nuxt'],
  imports: {
    dirs: ['./stores']
  },
  components: {
    global: true,
    dirs: ['~/components']
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {
      plugins: [
        tailwindLineclamp,
        plugin(function ({ addUtilities }) {
          addUtilities({
            '.vh100fix': {
              'height': '100sv',
            },
            '.content-hidden': {
              'content-visibility': 'hidden',
            },
            '.content-visible': {
              'content-visibility': 'visible',
            },
          })
        })],
      content: [],
    },
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
