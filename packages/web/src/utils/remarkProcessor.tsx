import * as React from 'react'
import unified from 'unified'
import parse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehype2react from 'rehype-react'
import rehypePrism from './rehype-prism'
import externalLinks from 'remark-external-links'

import './setupRefractor'

export const processor = unified()
  .use(externalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] })
  .use(parse)
  .use(remark2rehype)
  .use(rehypePrism as any)
  .use(rehype2react, { createElement: React.createElement })
