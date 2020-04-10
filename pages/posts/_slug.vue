<template>
  <div>
    <template v-if="currentPost">
      <h1>{{ currentPost.fields.title }}</h1>
      <figure>
        <img
          :src="setEyeCatch(currentPost.fields.headerImage).url"
          :alt="setEyeCatch(currentPost.fields.headerImage).title"
          width="700"
        />
      </figure>
      <p><span :is="draftChip(currentPost)" /></p>
      <p>{{ currentPost.fields.publishedAt }}</p>
      <p :style="categoryColor(currentPost.fields.category.fields.color)"><nuxt-link :to="linkTo('categories', currentPost.fields.category)">{{ currentPost.fields.category.fields.name }}</nuxt-link></p>

      <div v-html="$md.render(currentPost.fields.body)"></div>
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
  transition: 'slide-left',
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