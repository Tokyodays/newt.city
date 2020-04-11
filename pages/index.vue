<template>
  <div class="grid grid-cols-4">
    <header class="col-span-1 bg-teal-300 p-6">
      <h1 class="text-white text-4xl">BLOG</h1>
      <category-list class="my-12"></category-list>
      <tag-list class="my-12"></tag-list>
    </header>
    <main class="col-span-3">
      <article-list></article-list>
    </main>    
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import articleList from '@/components/organisms/articleList_org'
import categoryList from '@/components/molecules/categoryList_mol'
import tagList from '@/components/molecules/tagList_mol'


export default {
  transition: 'slide-left',
  components: {
    articleList,
    categoryList,
    tagList
  }
}
</script>
