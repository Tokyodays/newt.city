<template>
  <div class="grid grid-cols-4 h-screen">
    <menu-column></menu-column>
    <main class="col-span-3">
      <blog-article :currentPost="currentPost"></blog-article>
    </main>    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import blogArticle from '@/components/molecules/blogArticle_mol'
import MenuColumn from '@/components/organisms/menuColumn_org'

export default {
  components: {
    blogArticle,
    MenuColumn
  },
  head () {
    let post = this.currentPost;
    return {
      title: `${post.fields.title} | ${process.env.npm_package_title}`,
      meta: [
        { hid: 'description', name: 'description', content: post.fields.description },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: post.fields.title },
        { hid: 'og:description', property: 'og:description', content: post.fields.description },
        { hid: 'og:url', property: 'og:url', content: `${process.env.npm_package_domain}posts/${post.fields.slug}` },
        { hid: 'og:image', property: 'og:image', content: this.setEyeCatch(post.fields.headerImage).url }
      ],
    }
  },
  computed: {
    ...mapGetters(['setEyeCatch'])
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
