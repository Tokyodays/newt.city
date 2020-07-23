<template>
  <article>
    <article-list :posts="posts"></article-list>
  </article>
</template>

<script>
import { mapState } from 'vuex'
import articleList from '~/components/molecules/articleList_mol'

export default {
  components: {
    articleList
  },
  computed : {
    ...mapState(['posts'])
  }
}
</script>