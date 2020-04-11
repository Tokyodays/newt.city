<template>
  <article>
    <ul v-for="(post, i) in posts" :key="i">
      <li>
        <nuxt-link class="flex"
          :to="linkTo('posts', post)"
        >
          <figure class="w-4/12 relative h-64">
            <img class="w-full h-full absolute object-cover"
            :src="setEyeCatch(post.fields.headerImage).url"
            :alt="setEyeCatch(post.fields.headerImage).title"
           />
          </figure>
          <div class="w-10/12 border-b p-6">
            <h1 class="text-2xl mb-1">{{ post.fields.title }}</h1>
            <p :is="draftChip(post)" />
            <p class="mb-1" :style="categoryColor(post.fields.category.fields.color)">{{ post.fields.category.fields.name }}</p>
            <p class="mb-2">{{ post.fields.publishedAt }}</p>
            <template v-if="post.fields.tags">
              <ul>
                <li class="text-sm"
                  v-for="(tag) in post.fields.tags"
                  :key="tag.sys.id"
                >
                <tag-icon class="inline-block"></tag-icon> {{ tag.fields.name }}
                </li>
              </ul>
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

import { TagIcon, FolderIcon } from 'vue-feather-icons'

export default {
  transition: 'slide-left',
  components: {
    draftChip,
    categoryList,
    tagList,
    TagIcon,
    FolderIcon
  },
  computed : {
    ...mapState(['posts']),
    ...mapGetters(['setEyeCatch', 'draftChip', 'linkTo', 'categoryColor']) 
  }
}
</script>