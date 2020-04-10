<template>
  <div>
    <h1>Categories</h1>
    <div
      v-for="(category, i) in categories"
      :key="i"
    >
      <nuxt-link
        :to="linkTo('categories', category)"
      >
        {{ category.fields.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['categories']),
    ...mapGetters(['linkTo'])
  }
}
</script>