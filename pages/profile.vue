<template>
  <div class="md:grid md:grid-cols-4 h-screen">
    <header class="flex justify-between p-4 bg-baseColor md:hidden">
      <h1 class="shadow-2xl"><logo-mark></logo-mark></h1>
      <nav class="mt-auto mb-auto"><nuxt-link to="#MAIN_MENU"><menu-icon size="2.0x" class="text-white inline-block"></menu-icon></nuxt-link></nav>
    </header>
    <main class="md:row-start-1 md:col-start-2 md:col-span-3 md:overflow-y-scroll">
      about me
    </main>
    <menu-column class="md:row-start-1 md:col-start-1"></menu-column>
  </div>
</template>

<script>
import articleLists from '@/components/organisms/articleLists_org'
import MenuColumn from '@/components/organisms/menuColumn_org'
import LogoMark from '@/components/atoms/logoMark_atom'
import { MenuIcon } from 'vue-feather-icons'

export default {
  components: {
    articleLists,
    MenuColumn,
    LogoMark,
    MenuIcon
  }
}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 1rem;
  text-indent: 0.5em;
}
a:link,
a:visited {
  text-decoration: underline;
}
a:hover {
  text-decoration: none;
}
</style>
