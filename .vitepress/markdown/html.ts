import type { MarkdownRenderer } from 'vitepress'
import { load } from 'cheerio'
import { fixHTMLLink } from './links/fix'
import { validateLink } from './links/validate'

export function htmlMDPlugin(md: MarkdownRenderer) {
  const oldHTMLBlock = md.renderer.rules.html_block

  md.renderer.rules.html_block = (...params) => {
    const [tokens, idx, options, env] = params
    const token = tokens[idx]
    const $html = load(token.content, {
      lowerCaseAttributeNames: false,
      _useHtmlParser2: true,
    })

    // Find all links
    $html('a').each((index, link) => {
      const $link = $html(link)
      const href = $link.attr('href')
      if (!href || href.startsWith('https://'))
        return

      validateLink(href, env?.relativePath)
      const fixedLink = fixHTMLLink(href, md, env)
      $link.attr('href', fixedLink)
    })

    token.content = $html.html()
    return oldHTMLBlock(...params)
  }
}
