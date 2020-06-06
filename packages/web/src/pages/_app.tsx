import * as React from 'react'
import Providers from '~/components/Providers'
import '~/components/GlobalStyles/index'

import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp
