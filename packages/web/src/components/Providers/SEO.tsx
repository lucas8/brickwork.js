import React from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

// TODO: Complete SEO
const SeoConfig = {
  title: 'Brickwork.js',
  description: 'A simple, self-hosted, ecommerce solution for everyone',
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
}

export default function SEO() {
  return (
    <React.Fragment>
      <DefaultSeo {...SeoConfig} />
      <Head>
        <title>Brickwork.js</title>
      </Head>
    </React.Fragment>
  )
}
