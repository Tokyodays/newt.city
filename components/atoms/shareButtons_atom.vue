<template>
  <div class="flex justify-start">
    <a :href="twitterUrl()"
        class="twitter-share-button"
        target="_blank"
        title="twitter-tweet"
        data-show-count="false"
        rel="nofollow"
        data-lang="ja"><share-icon size="1.0x" class="icon"></share-icon> Twitter</a>
    <a :href="facebookUrl()"
        class="fb-share-button"
        target="_blank"
        title="facebook-share"
        rel="nofollow"
        data-layout="button_count"><share-icon size="1.0x" class="icon"></share-icon> Facebook</a>
    <a :href="lineUrl()"
        class="line-share-button"
        target="_blank"
        rel="nofollow"
        title="line-send"><share-icon size="1.0x" class="icon"></share-icon> LINE</a>
  </div>
</template>

<script>
import { ShareIcon } from 'vue-feather-icons'

export default {
  name: 'ShareButtons',

  components: {
    ShareIcon
  },

  props: {
    title: String,
    tags: Array,
    category: String
  },

  data: function() {
    return {
      url: `https://www.newt.city${this.$route.path}`,
      twitter_url: 'https://twitter.com/intent/tweet?url={0}&text={1}&hashtags={2}',
      facebook_url: 'https://www.facebook.com/sharer/sharer.php?u={0}&text={1}',
      line_url: 'https://social-plugins.line.me/lineit/share?url={0}&text={1}'
    }
  },

  methods: {
    formatByArr(msg) {
      var args = []
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i]
      }
      args = args.map(x => encodeURIComponent(x))
      return msg.replace(/\{(\d+)\}/g, function(m, k) {
        return args[k]
      })
    },

    twitterUrl() {
      let _array = [];
      if(this.tags) {
        _array = this.tags.map(x => x.fields.name)
      }
      _array.push(this.category)
      return this.formatByArr(this.twitter_url, this.url, this.title, _array,toString())
    },
    facebookUrl() {
      return this.formatByArr(this.facebook_url, this.url, this.title)
    },
    lineUrl() {
      return this.formatByArr(this.line_url, this.url, this.title)
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  @apply mb-6;
  a {
    @apply mr-6;
  }
}
</style>