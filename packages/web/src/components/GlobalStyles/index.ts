import { createGlobalStyle } from 'styled-components'
import theme from '~/components/Theme'

const ResetStyles = createGlobalStyle`
  * {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    font-weight: inherit;
    margin: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  html {
    display: flex;
    height: 100%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    box-sizing: border-box;
    font-size: 18px;
    line-height: ${theme.lineHeights.body};
    color: var(--text-primary);
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-family: ${theme.fonts.body};
    -webkit-text-size-adjust: none;
    @media (max-width: ${theme.breakpoints[3]}) {
      font-size: 16px;
    }
  }
  body {
    margin: 0;
    width: 100%;
    height: 100%;
  }
  #__next {
    height: 100%;
  }
`

export default ResetStyles
