import React from 'react'
import fs from 'fs'
import { AnimatePresence } from 'framer-motion'
import path from 'path'
import matter from 'gray-matter'
import Layout, { CenteredLayoutContainer } from '~/components/Layout'
import Card from '~/components/Card'
import GlobalMarkdownStyles from '~/components/GlobalStyles/markdown'
import { processor } from '~/utils/remarkProcessor'
import GlobalPrismStyles from '~/components/GlobalStyles/prism'
import Wash from '~/components/Wash'
import BuyButton from '~/components/BuyButton'
import * as S from '~/components/Product'

interface Props {
  markdownString?: any
  data?: any
}
// TODO: SEO

export default function Product({ markdownString, data }: Props) {
  const [[direction, isPayVisible], setPayView] = React.useState([1, false])

  console.log(isPayVisible)

  const { image, title, price } = data

  React.useEffect(() => {
    // Send ready message
    window.parent.postMessage({ method: 'clientReady', args: {} }, '*')
  }, [])

  const setDirection = (direction: boolean) => {
    console.log(direction)
    if (!direction) {
      setPayView([-1, false])
    } else {
      setPayView([1, true])
    }
  }

  return (
    <React.Fragment>
      <GlobalMarkdownStyles />
      <GlobalPrismStyles />
      <Layout withBackground={false}>
        <Wash />
        <CenteredLayoutContainer>
          <S.OverlayContainer state={isPayVisible ? 'pay' : 'card'}>
            <AnimatePresence custom={direction}>
              {isPayVisible && (
                <S.InnerContainer state="right">
                  <BuyButton
                    price={`$${price}`}
                    onClick={() => setPayView([1, false])}
                  >
                    Buy now
                  </BuyButton>
                </S.InnerContainer>
              )}
            </AnimatePresence>
            <AnimatePresence initial={false}>
              {!isPayVisible && (
                <S.InnerContainer state="left">
                  <Card
                    image={image}
                    title={title}
                    markdown={
                      (processor.processSync(markdownString) as any).result
                    }
                  >
                    <BuyButton
                      price={`$${price}`}
                      onClick={() => setPayView([-1, true])}
                    >
                      Buy now
                    </BuyButton>
                  </Card>
                </S.InnerContainer>
              )}
            </AnimatePresence>
          </S.OverlayContainer>
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
