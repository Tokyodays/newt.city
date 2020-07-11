<template>
  <div class="md:grid md:grid-cols-4 h-screen">
    <header class="flex justify-between p-4 bg-baseColor md:hidden">
      <h1>
        <logo-mark></logo-mark>
      </h1>
      <nav class="mt-auto mb-auto">
        <nuxt-link to="#MAIN_MENU">
          <menu-icon size="2.0x" class="text-white inline-block"></menu-icon>
        </nuxt-link>
      </nav>
    </header>
    <main class="md:row-start-1 md:col-start-2 md:col-span-3 md:overflow-y-scroll">
      <div>
        <h1>{{ tag.fields.name }}</h1>
        <article-list :posts="relatedPosts"></article-list>
      </div>
    </main>
    <menu-column class="md:row-start-1 md:col-start-1"></menu-column>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import articleList from '~/components/molecules/articleList_mol'
import categoryList from "@/components/molecules/categoryList_mol";
import MenuColumn from "@/components/organisms/menuColumn_org";
import LogoMark from "@/components/atoms/logoMark_atom";
import { MenuIcon } from "vue-feather-icons";

export default {
  components: {
    articleList,
    categoryList,
    MenuColumn,
    LogoMark,
    MenuIcon
  },

  asyncData({ payload, params, error, store, env }) {
    const tag = payload || store.state.tags.find(tag => tag.fields.slug === params.slug)
    if (tag) {
      const relatedPosts = store.getters.associatePosts(tag)
      return { tag, relatedPosts }
    } else {
      error({ statusCode: 400 })
    }
  }
}
</script>