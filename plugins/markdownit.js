import MarkdownIt from 'markdown-it'
import MarkdownItAnchor from 'markdown-it-anchor'
import uslug from 'uslug'
const uslugify = (s) => uslug(s)

export default ({ app }, inject) => {

  const md = new MarkdownIt({
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
    breaks: true, // 改行コードを<br>に変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
    typography: true  // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
  })

  md.use(MarkdownItAnchor,{
    slugify: uslugify
  })
  md.use(require("markdown-it-table-of-contents"))  // 追加

  const defaultRender = md.renderer.rules.link_open || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options)
  }
  
  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    const aIndex = tokens[idx].attrIndex('target')
    if (tokens[idx]['attrs'][0][1].match('http')) {
      if (aIndex < 0 ) {
        tokens[idx].attrPush(['target', '_blank'])
      } else {
        tokens[idx].attrs[aIndex][1] = '_blank'
      }
    }
    return defaultRender(tokens, idx, options, env, self);
  }

  inject('md', md)
}