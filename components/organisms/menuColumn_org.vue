<template>
  <nav class="bg-baseColor p-6 flex flex-col justify-between" id="MAIN_MENU">
    <div>
      <logo-mark></logo-mark>
      <category-list class="my-12"></category-list>
      <tag-list class="my-12"></tag-list>
    </div>
    <div>
      <copy-right></copy-right>
    </div>
  </nav>
</template>
<script>
import logoMark from '@/components/atoms/logoMark_atom'
import copyRight from '@/components/atoms/copyRight_atom'
import categoryList from '@/components/molecules/categoryList_mol'
import tagList from '@/components/molecules/tagList_mol'

export default {
  components: {
    categoryList,
    tagList,
    copyRight,
    logoMark
  }
}
</script>
