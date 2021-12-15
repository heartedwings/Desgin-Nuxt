export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // head: {
  //   title: 'nuxt-app',
  //   htmlAttrs: {
  //     lang: 'en'
  //   },
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { hid: 'description', name: 'description', content: '' },
  //     { name: 'format-detection', content: 'telephone=no' }
  //   ],
  //   link: [
  //     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  //   ]
  // },

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        type: 'module',
        src: 'https://production-assets.codepen.io/assets/embed/ei.js',
        async: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // ローカルストレージ
    { src: '~plugins/persistedstate.js', ssr: false },
    // firebase
    // { src: '~/plugins/firebase.js', mode: 'client' },
    // firebase.auth
    // { src: '~/plugins/firebase.auth.js', mode: 'client' },
    // plugin
    { src: '@/plugins/plugin', mode: 'client', },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // components: false,

  mode: 'universal',

  // middlewareを全ページで有効化
  router: {
    // middleware: 'authenticated'
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
