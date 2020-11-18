<template>
  <div>
    <ul v-for="(post, i) in posts" :key="i">
      <li>
        <nuxt-link class="md:flex overflow overflow-hidden"
          :to="linkTo('posts', post)"
        >
          <picture class="md:w-4/12 w-full relative overflow-hidden">
            <source type="image/webp" :srcset="`${setEyeCatch(post.fields.headerImage).url}?fm=webp`">
            <img class="w-full h-full md:absolute static object-cover"
              loading="lazy"
              :src="setEyeCatch(post.fields.headerImage).url"
              :alt="setEyeCatch(post.fields.headerImage).title"
            />
          </picture>
          <div class="md:w-8/12 w-full border-b px-12 py-6 md:p-16 over">
            <div class="-ml-2 pl-4 border-l-2 md:-ml-4 md:pl-4 md:border-l-4 border-darkColor1 text-gray-800 mb-4 leading-normal">
              <h1 class="text-xl md:text-2xl mb-2" style="transform: translate(-4px, 0);">{{ post.fields.title }}</h1>
              <h2 class="text-lg md:text-xl" style="transform: translate(-4px, 0);">{{ post.fields.subtitle }}</h2>
            </div>
            <p :is="draftChip(post)" />
            <p class="mb-2 text-subColor2 text-xs">
              <clock-icon size="1x" class="inline-block align-text-bottom"></clock-icon> <time :datetime="$moment(post.fields.modifiedAt).format('YYYY-MM-DD hh:mm:ss')" class="mr-4" v-text="$moment(post.fields.publishedAt).format('YYYY / MM / DD')"></time>
              <refresh-cw-icon size="1x" class="inline-block align-text-bottom"></refresh-cw-icon> <time :datetime="$moment(post.fields.modifiedAt).format('YYYY-MM-DD hh:mm:ss')" v-text="$moment(post.fields.modifiedAt).format('YYYY / MM / DD')"></time>
            </p>
            <p class="mb-2 text-sm text-gray-600">
              <span class="mr-4"><folder-icon size="1x" class="icon"></folder-icon> {{ post.fields.category.fields.name }}</span>
              <span class="mr-4"><pen-tool-icon size="1x" class="icon"></pen-tool-icon> {{ post.fields.author.fields.name }}</span>
              <template v-if="post.fields.tags">
                <span class="text-sm text-gray-600 mr-2"
                  v-for="(tag) in post.fields.tags"
                  :key="tag.sys.id"
                >
                  <tag-icon size="1x" class="icon" ></tag-icon> {{ tag.fields.name }}
                </span>
              </template>
            </p>
            <p class="text-base text-gray-800">{{ post.fields.description }}</p>

          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import draftChip from '~/components/atoms/draftChip_atom'
import categoryList from '@/components/molecules/categoryList_mol'
import tagList from '@/components/molecules/tagList_mol'

import { TagIcon, FolderIcon, ClockIcon, RefreshCwIcon, PenToolIcon } from 'vue-feather-icons'

export default {
  props: {
    posts: {
      type: Array
    }
  },
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
    ...mapGetters(['setEyeCatch', 'draftChip', 'linkTo', 'categoryColor']) 
  }
}
</script>

<style lang="scss" scoped>
img {
  -webkit-filter : saturate(30%) sepia(25%) grayscale(25%);
  filter : saturate(30%) sepia(25%) grayscale(25%);
}
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
        transform: scale3d(1.03, 1.03, 1.03);
        opacity: 0.75;
        filter: blur(0.5px);
    }
  }
  .over {
    transform: translateX(10px);
    transition-duration: .3s;
    transition-timing-function:ease-in-out;
  }
}
</style>