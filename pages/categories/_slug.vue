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
      <header class="container mx-auto p-8">
        <figure class="mb-8"><img class="object-cover h-48 w-full" :src="category.fields.categoryImage.fields.file.url"></figure>
        <h1 class="text-3xl mb-2">{{ category.fields.name }}</h1>
        <p>{{ category.fields.difinition }}</p>
      </header>  
      <article-list :posts="relatedPosts"></article-list>
    </main>
    <menu-column class="md:row-start-1 md:col-start-1"></menu-column>
  </div>
</template>

<script>
import articleList from '~/components/molecules/articleList_mol'
import categoryList from "@/components/molecules/categoryList_mol";
import MenuColumn from "@/components/organisms/menuColumn_org";
import LogoMark from "@/components/atoms/logoMark_atom";
import { MenuIcon } from "vue-feather-icons";
import { mapGetters } from "vuex";

export default {
  components: {
    articleList,
    categoryList,
    MenuColumn,
    LogoMark,
    MenuIcon
  },
  computed: {
    relatedPosts() {
      return this.$store.getters.relatedPosts(this.category);
    }
  },
  async asyncData({ payload, store, params, error }) {
    const category =
      payload ||
      (await store.state.categories.find(
        cat => cat.fields.slug === params.slug
      ));

    if (category) {
      return { category };
    } else {
      return error({ statusCode: 400 });
    }
  }
};
</script>
