<template>
  <header class="col-span-1 bg-baseColor p-6">
    <h1 class="text-white text-4xl"><nuxt-link to="/">BLOG</nuxt-link></h1>
    <category-list class="my-12"></category-list>
    <tag-list class="my-12"></tag-list>
  </header>
</template>
<script>
import categoryList from '@/components/molecules/categoryList_mol'
import tagList from '@/components/molecules/tagList_mol'

export default {
  transition: 'slide-left',
  components: {
    categoryList,
    tagList
  }
}
</script>
