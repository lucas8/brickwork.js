import * as React from 'react'
import GlobalStyles from '~/components/GlobalStyles'
import SEO from './SEO'
import DarkMode from './DarkMode'

interface Props {
  children?: any
}

export default ({ children }: Props) => {
  return (
    <React.Fragment>
      <SEO />
      <DarkMode />
      <GlobalStyles />
      {children}
    </React.Fragment>
  )
}
