<template>
  <div>
    <template v-if="currentPost">
      {{ currentPost.fields.title }}
      <img
        :src="setEyeCatch(currentPost.fields.headerImage).url"
        :alt="setEyeCatch(currentPost.fields.headerImage).title"
        width="700"
        height="400"
      />
      {{ currentPost.fields.publishedAt }}<br>
      {{ currentPost.fields.body }}
    </template>

    <template v-else>
      お探しの記事は見つかりませんでした。
    </template>

    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import client from '~/plugins/contentful'

export default {
  computed: {
    ...mapGetters(['setEyeCatch'])
  },
  async asyncData({ env, params }) {
    let currentPost = null
    await client.getEntries({
      content_type: env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug
    }).then(res => (currentPost = res.items[0])).catch(console.error)

    return { currentPost }
  }
}
</script>