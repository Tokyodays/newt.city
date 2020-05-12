<template>
  <section>
    <ul>
      <li>
        <a :href="twitterUrl()"
           class="twitter-share-button"
           target="_blank"
           title="twitter-tweet"
           data-show-count="false"
           data-lang="ja"><twitter-icon size="1.5x" class="custom-class"></twitter-icon></a>
      </li>
      <li class="widget__item">
        <a :href="facebookUrl()"
           class="fb-share-button"
           target="_blank"
           title="facebook-share"
           data-layout="button_count"><facebook-icon size="1.5x" class="custom-class"></facebook-icon></a>
      </li>
      <li>
        <a :href="lineUrl"
           class="line-share-button"
           target="_blank"
           title="line-send"><img src="@/assets/images/line_a.svg" width="32" height="32" /></a>
      </li>
    </ul>
  </section>
</template>

<script>
import { FacebookIcon, TwitterIcon} from 'vue-feather-icons'

export default {
  name: 'ShareButtons',

  components: {
    FacebookIcon,
    TwitterIcon
  },

  props: {
    title: String
  },

  data: function() {
    return {
      url: `https://www.newt.city${this.$route.path}`,
      twitter_url: 'https://twitter.com/intent/tweet?url={0}&text={1}',
      facebook_url: 'https://www.facebook.com/sharer/sharer.php?u={0}&text={1}',
      line_url: 'https://social-plugins.line.me/lineit/share?url={0}&text={1}'
    }
  },

  mounted() {
    if (!document.getElementById('facebook-jssdk')) {
      ;(function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s)
        js.id = id
        js.src = 'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v3.2'
        fjs.parentNode.insertBefore(js, fjs)
      })(document, 'script', 'facebook-jssdk')
    }

    if (!document.getElementById('twitter-wjs')) {
      ;(function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s)
        js.id = id
        js.src = 'https://platform.twitter.com/widgets.js'
        fjs.parentNode.insertBefore(js, fjs)
      })(document, 'script', 'twitter-wjs')
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

    createSnsUrl: function() {
      var url = encodeURIComponent(location.href)
      var text = encodeURIComponent(document.querySelector("meta[name='description']").getAttribute('content'))
      this.twitterUrl = 'https://twitter.com/intent/tweet?text=' + text + '&hashtags=' + text + '&url=' + url
      this.facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url
      this.lineUrl = 'https://social-plugins.line.me/lineit/share?url=' + url
    },

    twitterUrl() {
      return this.formatByArr(this.twitter_url, this.url, this.title)
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
a {
  width: 32px;
  height: 32px;
}
</style>