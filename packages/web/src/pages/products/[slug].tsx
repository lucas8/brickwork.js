import React from 'react'
import fs from 'fs'
import path from 'path'
import { useRouter } from 'next/router'
import Layout, { CenteredLayoutContainer } from '~/components/Layout'
import matter from 'gray-matter'
import marked from 'marked'

interface Props {
  notFound: boolean
  htmlString?: any
  data?: any
  error?: string
}

export default function Product({ htmlString, notFound, error }: Props) {
  const router = useRouter()

  if (router.isFallback || notFound) {
    return <div>{error}</div>
  }

  return (
    <Layout withBackground={false}>
      <CenteredLayoutContainer>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </CenteredLayoutContainer>
    </Layout>
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
