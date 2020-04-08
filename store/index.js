import defaultEyeCatch from '~/assets/images/defaultImage.png'
import client from '~/plugins/contentful'

// const {getConfigForKeys} = require('@/lib/config.js')
// const ctfConfig = getConfigForKeys([
//   'CTF_BLOG_POST_TYPE_ID',
//   'CTF_SPACE_ID',
//   'CTF_CDA_ACCESS_TOKEN',
//   'host'
// ])
// const {contentfulCreateClient} = require('@/plugins/contentful')
// const client = contentfulCreateClient(ctfConfig)

// 追記
export const state = () => ({
  posts: [],
  categories: []
})

export const getters = {
  setEyeCatch: () => (headerImage) => {
    if (!!headerImage && !!headerImage.fields) return { url: `https:${headerImage.fields.file.url}`, title: headerImage.fields.title }
    else return { url: defaultEyeCatch, title: 'defaultImage' }
  },
  linkTo: () => (name, obj) => {
    return { name: `${name}-slug`, params: { slug: obj.fields.slug } }
  },
  draftChip: () => (post) => {
    if (!post.fields.publishedAt) return 'draftChip'
  },
  categoryColor: () => (colorCode) => {
    return 'background-color:#' + colorCode
  }
}

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  },
  setCategories(state, payload) {
    state.categories = payload
  }
}

export const actions = {
  async getPosts({ commit }) {
    await client.getEntries({
      content_type: process.env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.publishedAt' // desc
    }).then(res =>
      commit('setPosts', res.items)
    ).catch(console.error)
  },
  async getCategories({ commit }) {
    await client.getEntries({
      content_type: 'category',
      order: 'fields.sort'
    }).then(res =>
      commit('setCategories', res.items)
    ).catch(console.error)
  }
}
