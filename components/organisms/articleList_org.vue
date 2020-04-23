<template>
  <article>
    <ul v-for="(post, i) in posts" :key="i">
      <li>
        <nuxt-link class="flex overflow overflow-hidden"
          :to="linkTo('posts', post)"
        >
          <figure class="w-4/12 relative overflow-hidden bg-gray-900">
            <img class="w-full h-full absolute object-cover"
            :src="setEyeCatch(post.fields.headerImage).url"
            :alt="setEyeCatch(post.fields.headerImage).title"
           />
          </figure>
          <div class="w-8/12 border-b p-16 over">
            <h1 class="text-2xl -ml-4 pl-4 leading-none border-l-4 border-darkColor1 text-gray-800 mb-4" style="transform: translate(-4px, 0);">{{ post.fields.title }}</h1>
            <p :is="draftChip(post)" />
            <p class="mb-2 text-subColor2 text-xs">
              <clock-icon size="1x" class="inline-block align-text-bottom"></clock-icon> <span class="mr-4" v-text="$moment(post.fields.publishedAt).format('YYYY / MM / DD')"></span>
              <refresh-cw-icon size="1x" class="inline-block align-text-bottom"></refresh-cw-icon> <span v-text="$moment(post.fields.modifiedAt).format('YYYY / MM / DD')"></span>
            </p>
            <p class="mb-2 text-sm text-gray-600">
              <span class="mr-4"><folder-icon size="1x" class="icon"></folder-icon> {{ post.fields.category.fields.name }}</span>
              <span class="mr-4"><pen-tool-icon size="1x" class="icon"></pen-tool-icon> {{ post.fields.auther.fields.name }}</span>
              <span v-if="post.fields.tags">
                <span class="text-sm text-gray-600 mr-2"
                  v-for="(tag) in post.fields.tags"
                  :key="tag.sys.id"
                >
                  <tag-icon size="1x" class="icon" ></tag-icon> {{ tag.fields.name }}
                </span>
              </span>
            </p>
            <p class="text-base text-gray-800">{{post.fields.description }}</p>

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

import { TagIcon, FolderIcon, ClockIcon, RefreshCwIcon, PenToolIcon } from 'vue-feather-icons'

export default {
  components: {
    draftChip,
    categoryList,
    tagList,
    TagIcon,
    FolderIcon,
    ClockIcon,
    RefreshCwIcon,
    PenToolIcon
  },
  computed : {
    ...mapState(['posts']),
    ...mapGetters(['setEyeCatch', 'draftChip', 'linkTo', 'categoryColor']) 
  }
}
</script>

<style lang="scss" scoped>
.icon {
  @apply text-darkColor1 inline-block align-text-bottom
}
.overflow:hover{
  transition: all;
  transition-duration: .3s;
  transition-timing-function:ease-in-out;
  @apply bg-gray-200;
  figure {
    img {
        transition: all;
        transition-duration: .3s;
        transition-timing-function:ease-in-out;
        transform: scale3d(1.05, 1.05, 1.05);
        opacity: 0.75;
        filter: blur(1px);
    }
  }
  .over {
    transform: translateX(10px);
    transition-duration: .3s;
    transition-timing-function:ease-in-out;
  }
}


</style>