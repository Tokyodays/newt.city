<template>
  <nav class="bg-baseColor p-6 flex flex-col justify-between shadow" id="MAIN_MENU">
    <div>
      <logo-mark></logo-mark>
      <category-list class="my-12"></category-list>
      <tag-list class="my-12"></tag-list>
      <appendix-list></appendix-list>
    </div>
    <div>
      <ul class="list-disc pl-4">
        <li class="text-white text-sm"><nuxt-link to="policy">Privacy Policy</nuxt-link></li>
      </ul>
      <copy-right></copy-right>
    </div>
  </nav>
</template>
<script>
import logoMark from '@/components/atoms/logoMark_atom'
import copyRight from '@/components/atoms/copyRight_atom'
import categoryList from '@/components/molecules/categoryList_mol'
import tagList from '@/components/molecules/tagList_mol'
import appendixList from '@/components/molecules/appendixList_mol'

export default {
  components: {
    categoryList,
    tagList,
    copyRight,
    logoMark,
    appendixList
  }
}
</script>
