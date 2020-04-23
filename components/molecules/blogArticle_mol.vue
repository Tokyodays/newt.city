<template>
  <article class="container mx-auto markdown">
    <template v-if="currentPost">
      <h1>{{ currentPost.fields.title }}</h1>
      <figure>
        <img
          :src="setEyeCatch(currentPost.fields.headerImage).url"
          :alt="setEyeCatch(currentPost.fields.headerImage).title"
          width="700"
        />
      </figure>
      <p><span :is="draftChip(currentPost)" /></p>
      <p>{{ currentPost.fields.publishedAt }}</p>
      <p :style="categoryColor(currentPost.fields.category.fields.color)"><nuxt-link :to="linkTo('categories', currentPost.fields.category)">{{ currentPost.fields.category.fields.name }}</nuxt-link></p>

      <div v-html="$md.render(currentPost.fields.body)"></div>
    </template>

    <template v-else>
      お探しの記事は見つかりませんでした。
    </template>

    <nuxt-link to="/">Home page</nuxt-link>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import draftChip from '~/components/atom/draftChip'

export default {
  props: {
    currentPost: {
      type: Object,
      required: true,
    }
  },
  components: {
    draftChip
  },
  computed: {
    ...mapGetters(['setEyeCatch', 'draftChip', 'linkTo', 'categoryColor'])
  }
}
</script>

<style>
/* purgecss start ignore */
/* Markdown Styles */
/* Global */
.markdown {
  @apply leading-relaxed text-lg;
}
/* Headers */
.markdown h1,
.markdown h2 {
  @apply text-2xl my-6 font-bold;
}
.markdown h3,
.markdown h4,
.markdown h5,
.markdown h6 {
  @apply text-xl my-3 font-semibold;
}
/* Links */
.markdown a {
  @apply text-blue-600;
}
.markdown a:hover {
  @apply underline;
}
/* Paragraph */
.markdown p {
  @apply mb-4;
}
/* Lists */
.markdown ul,
.markdown ol {
  @apply mb-4 ml-8;
}
.markdown li > p,
.markdown li > ul,
.markdown li > ol {
  @apply mb-0;
}
.markdown ol {
  @apply list-decimal;
}
.markdown ul {
  @apply list-disc;
}
/* Blockquotes */
.markdown blockquote {
  @apply p-0 p-2 mx-6 bg-gray-100 mb-4 border-l-4 border-gray-400 italic;
}
.markdown blockquote > p {
  @apply mb-0;
}
/* Tables */
.markdown td,
.markdown th {
  @apply px-2 py-1 border border-gray-400;
}
.markdown tr:nth-child(odd) {
  @apply bg-gray-100;
}
.markdown table {
  @apply mb-6;
}
</style>