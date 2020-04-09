require('dotenv').config();
const client = require('./plugins/contentful').default

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    'plugins/contentful'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],

  env: {
    // contentful
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],

  router: {
    middleware: [
      'getContentful'
    ]
  },
  
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: process.env.CTF_BLOG_POST_TYPE_ID
        }),
        client.getEntries({
          content_type: 'category'
        }),
        client.getEntries({
          content_type: 'tag'
        })
      ]).then(([posts, categories, tags]) => {
        return [
          ...posts.items.map((post) => {
            return { route: `posts/${post.fields.slug}`, payload: post }
          }),
          ...categories.items.map((category) => {
            return { route: `categories/${category.fields.slug}`, payload: category }
          }),
          ...tags.items.map((tag) => {
            return { route: `tags/${tag.fields.slug}`, payload: tag }
          })
        ]
      })
    }
  }
}
