<template>
  <aside>
    <h1 class="text-white text-2xl mb-4">Tags</h1>
    <ul>
      <li class="mb-2"
        v-for="(tag, i) in tags"
        :key="i"
      >
        <tag-icon size="1.2x" class="text-white inline-block"></tag-icon>
        <nuxt-link class="text-white"
          :to="linkTo('tags', tag)"
        >
          {{ tag.fields.name }}
        </nuxt-link> <span class="text-white">[{{ postCount(tag) }}]</span>
      </li>
    </ul>
    <div
      v-for="(tag, i) in tags"
      :key="i"
    >
    </div>
  </aside>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { TagIcon } from 'vue-feather-icons'

export default {
  components: {
    TagIcon
  },
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