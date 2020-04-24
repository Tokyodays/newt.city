<template>
  <div class="grid grid-cols-4 h-screen">
    <menu-column></menu-column>
    <main class="col-span-3">
      <article-list></article-list>
    </main>    
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
