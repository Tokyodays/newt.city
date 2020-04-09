<template>
  <div>
    <h1>Tags</h1>
    <div
      v-for="(tag, i) in tags"
      :key="i"
    >
      <nuxt-link
        :to="linkTo('tags', tag)"
      >
        {{ tag.fields.name }}
      </nuxt-link>{{ postCount(tag) }}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['tags']),
    ...mapGetters(['linkTo']),
    postCount() {
      return (currentTag) => {
        return this.$store.getters.associatePosts(currentTag).length
      }
    }
  }
}
</script>