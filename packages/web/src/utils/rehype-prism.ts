import visit from 'unist-util-visit'
import nodeToString from 'hast-util-to-string'
import refractor from 'refractor'

const getLanguage = (node) => {
  const className = node.properties.className || []

  for (const classListItem of className) {
    if (classListItem.slice(0, 9) === 'language-') {
      return classListItem.slice(9).toLowerCase()
    }
  }

  return null
}

const rehypePrism = (options) => {
  options = options || {}

  return (tree) => {
    visit(tree, 'element', visitor)
  }

  function visitor(node, index, parent) {
    if (!parent || parent.tagName !== 'pre' || node.tagName !== 'code') {
      return
    }

    const lang = getLanguage(node)

    if (lang === null) {
      return
    }

    let result
    try {
      parent.properties.className = (parent.properties.className || []).concat(
        'language-' + lang
      )
      result = refractor.highlight(nodeToString(node), lang)
    } catch (err) {
      if (options.ignoreMissing && /Unknown language/.test(err.message)) {
        return
      }
      throw err
    }

    node.children = result
  }
}

export default rehypePrism
