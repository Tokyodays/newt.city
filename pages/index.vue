<template>
  <div class="md:grid md:grid-cols-4 h-screen">
    <main class="md:row-start-1 md:col-start-2 md:col-span-3">
      <article-list></article-list>
    </main>    
    <menu-column class="md:row-start-1 md:col-start-1"></menu-column>
  </div>
</template>

<script>
import articleList from '@/components/organisms/articleList_org'
import MenuColumn from '@/components/organisms/menuColumn_org'

export default {
  components: {
    articleList,
    MenuColumn
  }
}
</script>
