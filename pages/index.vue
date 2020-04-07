<template>
  <div>
    <ul v-for="(post, i) in posts" :key="i">
      <li>{{ post.fields.title }}</li>
      <ul>
        <img
          :src="post.fields.headerImage.fields.file.url"
          :alt="post.fields.headerImage.fields.title"
          width="400"/>
        <li>{{ post.fields.body }}</li>
        <li>{{ post.fields.publishedAt }}</li>
      </ul>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import client from '~/plugins/contentful'

export default {
  conputed : {
    ...mapGetters(['setEyeCatch', 'linkTo'])
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
