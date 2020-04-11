<template>
  <article>
    <ul v-for="(post, i) in posts" :key="i">
      <li>
        <nuxt-link class="flex"
          :to="linkTo('posts', post)"
        >
          <figure>
            <img
            :src="setEyeCatch(post.fields.headerImage).url"
            :alt="setEyeCatch(post.fields.headerImage).title"
            width="400"/>
          </figure>
          <div class="bg-blue-200">
            <h1 class="text-3xl">{{ post.fields.title }}</h1>

            <span :is="draftChip(post)" />
            <!-- <p :style="categoryColor(post.fields.category.fields.color)"><nuxt-link :to="linkTo('categories', post.fields.category)">{{ post.fields.category.fields.name }}</nuxt-link></p> -->
            <p>{{ post.fields.publishedAt }}</p>
            <template v-if="post.fields.tags">
              <div
                v-for="(tag) in post.fields.tags"
                :key="tag.sys.id"
              >
              </div>
            </template>

          </div>
        </nuxt-link>
      </li>
    </ul>
  </article>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import draftChip from '~/components/atom/draftChip'
import categoryList from '@/components/molecules/categoryList_mol'
import tagList from '@/components/molecules/tagList_mol'

import { AirplayIcon, AtSignIcon } from 'vue-feather-icons'

export default {
  transition: 'slide-left',
  components: {
    draftChip,
    categoryList,
    tagList,
    AirplayIcon
  },
  computed : {
    ...mapState(['posts']),
    ...mapGetters(['setEyeCatch', 'draftChip', 'linkTo', 'categoryColor']) 
  }
}
</script>