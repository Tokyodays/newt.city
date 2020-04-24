<template>
  <div class="grid grid-cols-4 h-screen">
    <menu-column></menu-column>
    <main class="col-span-3">
      <blog-article :currentPost="currentPost"></blog-article>
    </main>    
  </div>
</template>

<script>
import blogArticle from '@/components/molecules/blogArticle_mol'
import MenuColumn from '@/components/organisms/menuColumn_org'

export default {
  components: {
    blogArticle,
    MenuColumn
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
