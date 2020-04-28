require('dotenv').config();
const client = require('./plugins/contentful').default

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#',
      lang: 'ja'
    },
    title: process.env.npm_package_title || '',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      { hid: 'viewport', name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'keywords', name: 'keywords', content: 'journey, music, toeic, shogi, video game' },
      { hid: 'theme-color', name: 'theme-color', content: '#A2A4B4'},
      { hid: 'robots', name: 'robots', content: 'index,follow,noarchive'},
      { hid: 'format-detection', name: 'format-detection', content: 'telephone=no'},
      { hid: 'copyright', name: 'copyright', content: '&copy; The Newt City, No reproduction without permission.'},
      { hid: 'auther', name: 'author', content: 'Tokyodays'},
      { hid: 'og:url', property: 'og:url', content: process.env.npm_package_domain },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: `${process.env.npm_package_domain}assets/images/ogimage.png` },
      { hid: 'og:title', property: 'og:title', content: process.env.npm_package_title },
      { hid: 'og:site_name', property: 'og:site_name', content: process.env.npm_package_title },
      { hid: 'og:description', property: 'og:description', content: process.env.npm_package_description || '' },
      { hid: 'article:publisher', property: 'article:publisher', content: process.env.npm_package_author },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@kikuchi_takeshi' },
      { hid: 'twitter:title', name: 'twitter:title', content: process.env.npm_package_title },
      { hid: 'twitter:description', name: 'twitter:description', content: process.env.npm_package_description || '' },
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
    '~/plugins/contentful',
    '~/plugins/markdownit',
    '~/plugins/jsonld'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment',
    '@nuxtjs/gtm'
  ],

  gtm: {
    id: 'GTM-N5T6V5Z'
  },

  moment: {
    locales: ['ja']
  },

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
    '@nuxtjs/markdownit',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap'
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

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://newtcity.netlify.app/',
    cacheTime: 1000 * 60 * 15,
    async routes () {
      return Promise.all([
        client.getEntries({
          content_type: process.env.CTF_BLOG_POST_TYPE_ID
        })
      ]).then(([posts, categories, tags]) => {
        return [
          ...posts.items.map((post) => {
            const lastmod = (post.fields.modifiedAt !== void 0) ? post.fields.modifiedAt : post.fields.publishedAt
            return { 
              url: `posts/${post.fields.slug}`,
              lastmodISO: lastmod,
              priority: 0.6,
              changefreq: 'weekly'
            }
          })
        ]
      })
    }
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
