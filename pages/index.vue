<template>
  <div class="grid grid-cols-4">
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
  transition: 'slide-left',
  components: {
    articleList,
    MenuColumn
  }
}
</script>
