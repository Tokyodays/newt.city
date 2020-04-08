<template>
  <div>
    <ul v-for="(post, i) in posts" :key="i">
      <li>{{ post.fields.title }}</li>
      <ul>
        <img
          :src="setEyeCatch(post.fields.headerImage).url"
          :alt="setEyeCatch(post.fields.headerImage).title"
          width="400"/>
          <span :is="draftChip(post)" />
          <li :style="categoryColor(post.fields.category.fields.color)">{{ post.fields.category.fields.name }}</li>
        <li>{{ post.fields.body }}</li>
        <li>{{ post.fields.publishedAt }}</li>
        <li><nuxt-link :to="linkTo('posts', post)">aaaa</nuxt-link></li>
      </ul>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import client from '~/plugins/contentful'
import draftChip from '~/components/atom/draftChip'

export default {
  components: {
    draftChip
  },
  computed : {
    ...mapState(['posts']),
    ...mapGetters(['setEyeCatch', 'draftChip', 'linkTo', 'categoryColor']) 
  }
}
</script>
