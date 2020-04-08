<template>
  <div>
    <ul v-for="(post, i) in posts" :key="i">
      <li>{{ post.fields.title }}</li>
      <ul>
        <img
          :src="setEyeCatch(post.fields.headerImage).url"
          :alt="setEyeCatch(post.fields.headerImage).title"
          width="400"/>
          <span :is="draftChip(post)" />
        <li>{{ post.fields.body }}</li>
        <li>{{ post.fields.publishedAt }}</li>
        <li><nuxt-link :to="linkTo(post)">aaaa</nuxt-link></li>
      </ul>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import client from '~/plugins/contentful'
import draftChip from '~/components/atom/draftChip'

export default {
  components: {
    draftChip
  },
  computed : {
    linkTo: () => (obj) => {
      return { name: 'posts-slug', params: { slug: obj.fields.slug } }
    },
    ...mapGetters(['setEyeCatch', 'draftChip'])
  },
  async asyncData({ env }) {
    let posts = []
    await client.getEntries({
      content_type: env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.publishedAt'
    }).then(res => (posts = res.items)).catch(console.error)
    return { posts }
  }
}
</script>
