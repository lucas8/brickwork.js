import * as React from 'react'
import unified from 'unified'
import parse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehype2react from 'rehype-react'
import rehypePrism from './rehype-prism'
import './setupRefractor'

export const processor = unified()
  .use(parse)
  .use(remark2rehype)
  .use(rehypePrism as any)
  .use(rehype2react, { createElement: React.createElement })
