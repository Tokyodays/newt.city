<template>
  <article>
    <ul v-for="(post, i) in posts" :key="i">
      <li>
        <nuxt-link class="flex overflow overflow-hidden"
          :to="linkTo('posts', post)"
        >
          <picture class="w-4/12 relative overflow-hidden">
            <source type="image/webp" :srcset="`${setEyeCatch(post.fields.headerImage).url}?fm=webp`">
            <img class="w-full h-full absolute object-cover"
              loading="lazy"
              :src="setEyeCatch(post.fields.headerImage).url"
              :alt="setEyeCatch(post.fields.headerImage).title"
            />
          </picture>
          <div class="w-8/12 border-b px-12 py-6 md:p-16 over">
            <h1 class="text-xl -ml-2 pl-2 border-l-2 md:text-2xl md:-ml-4 md:pl-4 md:border-l-4 leading-none  border-darkColor1 text-gray-800 mb-4" style="transform: translate(-4px, 0);">{{ post.fields.title }}</h1>
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