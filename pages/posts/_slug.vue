<template>
  <div class="md:grid md:grid-cols-4 h-screen">
    <header class="flex justify-between p-4 bg-baseColor md:hidden ">
      <h1><logo-mark></logo-mark></h1>
      <nav class="mt-auto mb-auto"><nuxt-link to="#MAIN_MENU"><menu-icon size="2.0x" class="text-white inline-block"></menu-icon></nuxt-link></nav>
    </header>
    <main class="md:row-start-1 md:col-start-2 md:col-span-3 md:overflow-y-scroll">
      <blog-article :currentPost="currentPost"></blog-article>
    </main>
    <menu-column class="md:row-start-1 md:col-start-1"></menu-column>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import blogArticle from '@/components/molecules/blogArticle_mol'
import MenuColumn from '@/components/organisms/menuColumn_org'
import LogoMark from '@/components/atom/logoMark_atom'
import { MenuIcon } from 'vue-feather-icons'

export default {
  components: {
    blogArticle,
    MenuColumn,
    MenuIcon,
    LogoMark
  },
  head () {
    let post = this.currentPost;
    return {
      title: `${post.fields.title} | The Newt City`,
      meta: [
        { hid: 'description', name: 'description', content: post.fields.description },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: post.fields.title },
        { hid: 'og:description', property: 'og:description', content: post.fields.description },
        { hid: 'og:url', property: 'og:url', content: `${process.env.npm_package_domain}posts/${post.fields.slug}` },
        { hid: 'og:image', property: 'og:image', content: this.setEyeCatch(post.fields.headerImage).url },
        { hid: 'author', name: 'author', content: post.fields.author.fields.name },
        { hid: 'article:publisher', property: 'article:publisher', content: post.fields.author.fields.name },
        { hid: 'twitter:title', name: 'twitter:title', content: post.fields.title},
        { hid: 'twitter:description', name: 'twitter:description', content: post.fields.description|| '' },
      ],
    }
  },
  computed: {
    ...mapGetters(['setEyeCatch', 'siteName'])
  },
  jsonld() {
    let post = this.currentPost;
    return {
      '@context': 'http://schema.org',
      '@type': 'Article',
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': process.env.npm_package_domain
      },
      'headline': post.fields.title,
      'description': post.fields.description,
      'image': [
        this.setEyeCatch(post.fields.headerImage).url
      ],
      'datePublished': post.fields.publishedAt,
      'dateModified': post.fields.modifiedAt,
      'author': {
        '@type': 'Person',
        'name': post.fields.author.fields.name
      },
      'Publisher': {
        '@type': 'Organization',
        'name': 'The Newt City',
        'logo': {
          '@type': 'ImageObject',
          'url': `${process.env.npm_package_domain}icon.png`
        }
      },
      'articleBody': post.fields.body,
      'articleSection': post.fields.category.fields.name,
      'wordCount': post.fields.body.length,
      'url': `${process.env.npm_package_domain}posts/${post.fields.slug}`
    }
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
