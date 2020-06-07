import React from 'react'
import fs from 'fs'
import path from 'path'
import { useRouter } from 'next/router'
import Layout, { CenteredLayoutContainer } from '~/components/Layout'
import matter from 'gray-matter'
import Card from '~/components/Card'
import GlobalMarkdownStyles from '~/components/GlobalStyles/markdown'
import { processor } from '~/utils/remarkProcessor'
import GlobalPrismStyles from '~/components/GlobalStyles/prism'
import Wash from '~/components/Wash'

interface Props {
  notFound: boolean
  markdownString?: any
  data?: any
  error?: string
}
// TODO: SEO

export default function Product({
  markdownString,
  notFound,
  error,
  data,
}: Props) {
  const router = useRouter()

  const { image, title } = data

  return (
    <React.Fragment>
      <GlobalMarkdownStyles />
      <GlobalPrismStyles />
      <Layout withBackground={false}>
        <Wash />
        <CenteredLayoutContainer>
          <Card image={image} title={title}>
            <React.Fragment>
              {(processor.processSync(markdownString) as any).result}
            </React.Fragment>
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
    fallback: false,
    paths,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  let markdownWithMetadata = fs.readFileSync(
    path.join('src', 'products', slug + '.md')
  )

  const markdownString = markdownWithMetadata.toString()

  // Parses the table at the top, describing the title + other metadata
  const parsedMarkdown = matter(markdownString)

  return {
    props: {
      markdownString: parsedMarkdown.content,
      data: parsedMarkdown.data,
      notFound: false,
    },
  }
}
