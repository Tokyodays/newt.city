<template>
  <div class="md:grid md:grid-cols-4 h-screen">
    <header class="flex justify-between p-4 bg-baseColor md:hidden">
      <h1 class="shadow-2xl"><logo-mark></logo-mark></h1>
      <nav class="mt-auto mb-auto"><nuxt-link to="#MAIN_MENU"><menu-icon size="2.0x" class="text-white inline-block"></menu-icon></nuxt-link></nav>
    </header>
    <main class="md:row-start-1 md:col-start-2 md:col-span-3 md:overflow-y-scroll">
      <div class="px-4 py-8 md:px-16 lg:px-32 xl:px-64 leading-relaxed">
        <h1 class="text-2xl my-8 text-teal-600 border-darkColor1 border-l-2 pl-4">Privacy Policy</h1>
        <!--
        <h2 class="text-xl my-8 text-teal-800 font-bold">広告の配信について</h2>
        <p>当サイトは第三者配信の広告サービス「Google Adsense グーグルアドセンス」を利用しています。</p>
        <p>広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookie（クッキー）を使用することがあります。</p>
        <p>Cookie（クッキー）を無効にする設定およびGoogleアドセンスに関する詳細は「<a href="https://policies.google.com/technologies/ads?gl=jp" target="_blank">広告 – ポリシーと規約 – Google</a>」をご覧ください。</p>
        <p>また、[サイト名]は、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。</p>
        <p>第三者がコンテンツおよび宣伝を提供し、訪問者から直接情報を収集し、訪問者のブラウザにCookie（クッキー）を設定したりこれを認識したりする場合があります。</p>
        -->
        <h2 class="text-xl my-8 text-teal-800 font-bold">アクセス解析ツールについて</h2>
        <p>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。</p>
        <p>このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank">詳しくはここをクリック</a>してください。</p>
        <h2 class="text-xl my-8 text-teal-800 font-bold">免責事項</h2>
        <p>当サイトで掲載している画像の著作権・肖像権等は各権利所有者に帰属致します。権利を侵害する目的ではございません。記事の内容や掲載画像等に問題がございましたら、各権利所有者様本人が直接メールでご連絡下さい。確認後、対応させて頂きます。</p>
        <p>当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。</p>
        <p>当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。</p>
        <p>当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。</p>
        <h2 class="text-xl my-8 text-teal-800 font-bold">プライバシーポリシーの変更について</h2>
        <p>当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。</p>
        <p>修正された最新のプライバシーポリシーは常に本ページにて開示されます。</p>
      </div>
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