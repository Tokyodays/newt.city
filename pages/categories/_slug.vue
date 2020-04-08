<template>
  <div>
    <h1>{{ category.fields.name }}</h1>
    <div
      v-for="(post, i) in relatedPosts"
      :key="i"
    >
      <p><nuxt-link :to="linkTo('posts', post)">{{ post.fields.title }}</nuxt-link></p>
    </div>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            relatedPosts() {
                return this.$store.getters.relatedPosts(this.category)
            },
            ...mapGetters(['linkTo']) 
        },
        async asyncData({ payload, store, params, error }) {
            const category = payload || await store.state.categories.find(cat => cat.fields.slug === params.slug)

            if (category) {
                return { category }
            } else {
                return error({ statusCode: 400 })
            }
        }
    }
</script>