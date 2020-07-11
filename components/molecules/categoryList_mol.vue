<template>
  <aside>
    <h1 class="text-white text-2xl mb-4">Categories</h1>
    <ul>
      <li class="mb-2" v-for="(category, i) in categories" :key="i">
        <folder-icon size="1.2x" class="text-white inline-block"></folder-icon>
        <nuxt-link
          class="text-white"
          :to="linkTo('categories', category)"
        >{{ category.fields.name }}</nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { FolderIcon } from "vue-feather-icons";

export default {
  components: {
    FolderIcon
  },
  computed: {
    ...mapState(["categories"]),
    ...mapGetters(["linkTo"])
  }
};
</script>
