import React from 'react'
import fs from 'fs'
import path from 'path'
import { useRouter } from 'next/router'
import Layout, { CenteredLayoutContainer } from '~/components/Layout'
import matter from 'gray-matter'
import marked from 'marked'
import Card from '~/components/Card'
import GlobalMarkdownStyles from '~/components/GlobalStyles/markdown'
interface Props {
  notFound: boolean
  htmlString?: any
  data?: any
  error?: string
}

// TODO: Edit markdown
// TODO: SEO
// TODO: Prisma + Syntax highlighting

export default function Product({ htmlString, notFound, error }: Props) {
  const router = useRouter()

  if (router.isFallback || notFound) {
    return <div>{error}</div>
  }

  return (
    <React.Fragment>
      <GlobalMarkdownStyles />
      <Layout withBackground={false}>
        <CenteredLayoutContainer>
          <Card>
            <div
              className="markdown"
              dangerouslySetInnerHTML={{ __html: htmlString }}
            />
          </Card>
        </CenteredLayoutContainer>
      </Layout>
    </React.Fragment>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync('src/products')
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    fallback: true,
    paths,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  let markdownWithMetadata: Buffer

  try {
    markdownWithMetadata = fs.readFileSync(
      path.join('src', 'products', slug + '.md')
    )
  } catch (error) {
    return {
      props: {
        notFound: true,
        error: 'Product not found.',
      },
    }
  }

  // Parses the table at the top, describing the title + other metadata
  const parsedMarkdown = matter(markdownWithMetadata.toString())

  const htmlString = marked(parsedMarkdown.content)

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
      notFound: false,
    },
  }
}
