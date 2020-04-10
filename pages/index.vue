<template>
  <div class="grid grid-cols-4">
    <header class="col-span-1">aaaa</header>
    <main class="col-span-3">
      <ul v-for="(post, i) in posts" :key="i">
        <li>{{ post.fields.title }} <airplay-icon size="1.5x" class="custom-class"></airplay-icon></li>
        <ul>
          <img
            :src="setEyeCatch(post.fields.headerImage).url"
            :alt="setEyeCatch(post.fields.headerImage).title"
            width="400"/>
            <span :is="draftChip(post)" />
            <p :style="categoryColor(post.fields.category.fields.color)"><nuxt-link :to="linkTo('categories', post.fields.category)">{{ post.fields.category.fields.name }}</nuxt-link></p>
          <li>{{ post.fields.publishedAt }}</li>
          <li><nuxt-link :to="linkTo('posts', post)">link</nuxt-link></li>
        </ul>
        <template v-if="post.fields.tags">
          <div
            v-for="(tag) in post.fields.tags"
            :key="tag.sys.id"
          >
          <nuxt-link :to="linkTo('tags', tag)">{{ tag.fields.name }}</nuxt-link>
          </div>
        </template>
      </ul>


    </main>
    
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import client from '~/plugins/contentful'
import draftChip from '~/components/atom/draftChip'
import { AirplayIcon, AtSignIcon } from 'vue-feather-icons'

export default {
  transition: 'slide-left',
  components: {
    draftChip,
    AirplayIcon
  },
  computed : {
    ...mapState(['posts']),
    ...mapGetters(['setEyeCatch', 'draftChip', 'linkTo', 'categoryColor']) 
  }
}
</script>
