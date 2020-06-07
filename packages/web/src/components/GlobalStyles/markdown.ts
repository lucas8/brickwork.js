import { createGlobalStyle } from 'styled-components'
import {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  list,
  listItem,
  pre,
  code,
  blockquote,
  img,
  hr,
} from '~/components/Typography'
import theme from '~/components/Theme'

const GlobalMarkdownStyles = createGlobalStyle`
  .markdown {
    h1 {
      ${h1};
      margin: ${theme.space[2]} 0;
    }
    h2 {
      ${h2};
      margin: ${theme.space[2]} 0;
    }
    h3 {
      ${h3};
      margin: ${theme.space[2]} 0;
    }
    h4 {
      ${h4};
      margin: ${theme.space[2]} 0;
    }
    h5 {
      ${h5};
      margin: ${theme.space[2]} 0;
    }
    h6 {
      ${h6};
      margin: ${theme.space[2]} 0;
    }
    p {
      ${p};
      line-height: 1.6;
      word-break: break-word;
      &:first-of-type {
        margin-top: 0;
      }
      img {
        ${img};
        max-width: 100%;
      }
    }
    figure {
      img {
        ${img};
      }
      margin: ${theme.space[5]} -${theme.space[5]} 0;
      max-width: calc(100% + 64px);
      @media (max-width: ${theme.breakpoints[4]}) {
        max-width: 100%;
        margin: ${theme.space[3]} 0 0;
      }
    }
    ul, ol {
      ${list};
      margin: ${theme.space[3]};
      margin-left: ${theme.space[4]};
      margin-right: 0;
      font-family: ${theme.fonts.body};
      line-height: 1.7;
    }
    li {
      ${listItem}
    }
    pre {
      margin: ${theme.space[3]} 0;
      ${pre}
    }
    code {
      ${code}
      margin-top: 0;
    }
    strong {
      font-weight: ${theme.fontWeights.bold};
    }
    blockquote {
      ${blockquote}
      margin: ${theme.space[3]} 0;
    }
    hr {
      ${hr}
      margin: ${theme.space[3]} 0;
    }
    table {
      min-width: 100%;
      width: 100%;
      max-width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
      margin: ${theme.space[5]} 0;
      table-layout: fixed;

      tbody {
        min-width: 100%;
        overflow: auto;
        width: 100%;
        max-width: 100%;
        width: -webkit-fit-content;
      }
      th {
        ${p};
        font-weight: ${theme.fontWeights.bold} !important;
        text-align: left;
        padding: ${theme.space[2]};

      }
      td {
        ${p};
        overflow: auto;
        padding: ${theme.space[2]};
        vertical-align: top;
        border-top: 1px solid var(--border-primary);
        text-overflow: ellipsis;
        width: 100%;
      }
      thead th {
        vertical-align: bottom;
        border-bottom: 1px solid var(--border-primary);
      }
    }
  }
`

export default GlobalMarkdownStyles
