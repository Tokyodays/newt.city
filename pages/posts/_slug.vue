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
      <span :is="draftChip(currentPost)" />
      {{ currentPost.fields.publishedAt }}<br>
      {{ currentPost.fields.body }}
      <p :style="categoryColor(currentPost.fields.category.fields.color)"><nuxt-link :to="linkTo('categories', currentPost.fields.category)">{{ currentPost.fields.category.fields.name }}</nuxt-link></p>
    </template>

    <template v-else>
      お探しの記事は見つかりませんでした。
    </template>

    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import draftChip from '~/components/atom/draftChip'

export default {
  components: {
    draftChip
  },
  computed: {
    ...mapGetters(['setEyeCatch', 'draftChip', 'linkTo', 'categoryColor'])
  },
  async asyncData({ payload, store, params, error }) {
    const currentPost = payload || await store.state.posts.find(post => post.fields.slug === params.slug)

    if (currentPost) {
      return { currentPost }
    } else {
      return error({ statusCode: 400 })
    }
  }
}
</script>