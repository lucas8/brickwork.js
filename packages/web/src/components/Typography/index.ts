import styled, { css } from 'styled-components'
import theme from '~/components/Theme'

const heading = css`
  font-weight: ${theme.fontWeights.heading};
  color: var(--text-primary);
  line-height: ${theme.lineHeights.heading};
  letter-spacing: -0.4px;
`

export const h1 = css`
  ${heading};
  font-size: ${theme.fontSizes[6]};
  @media (max-width: ${theme.breakpoints[4]}) {
    font-size: ${theme.fontSizes[5]};
  }
`

export const H1 = styled.h1`
  ${h1};
`

export const h2 = css`
  ${heading};
  font-size: ${theme.fontSizes[5]};
  letter-spacing: -0.6px;
`

export const H2 = styled.h2`
  ${h2};
  @media (max-width: ${theme.breakpoints[4]}) {
    font-size: ${theme.fontSizes[4]};
  }
`

export const h3 = css`
  ${heading};
  font-size: ${theme.fontSizes[4]};
  letter-spacing: -0.6px;
`

export const H3 = styled.h3`
  ${h3};
`

export const h4 = css`
  ${heading};
  font-weight: 700;
  font-size: ${theme.fontSizes[3]};
`

export const H4 = styled.h4`
  ${h4};
`

export const h5 = css`
  ${heading};
  font-weight: 700;
  font-size: ${theme.fontSizes[2]};
`

export const Header = styled.h4`
  ${h4};
  font-family: ${theme.fonts.header};
`

export const H5 = styled.h5`
  ${h5};
`

export const h6 = css`
  ${heading};
  font-weight: 700;
  font-size: ${theme.fontSizes[0]};
`

export const H6 = styled.h6`
  ${h6};
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 0.2px;
`

export const p = css`
  font-size: ${theme.fontSizes[1]};
  font-weight: ${theme.fontWeights.body};
  line-height: ${theme.lineHeights.body};
  letter-spacing: -0.1px;
  color: var(--text-secondary);
  a {
    color: var(--text-link);
    text-decoration: none;
    font-weight: 500;
    word-break: break-word;
    hyphens: auto;
  }
  a:hover {
    text-decoration: underline;
  }
  code {
    font-size: ${theme.fontSizes[0]};
    box-shadow: inset 0 0 0 1px var(--border-primary);
  }
  a > code {
    padding: ${theme.space[0]} ${theme.space[1]};
    box-shadow: inset 0 0 0 1px rgba(var(--text-link-rgb), 0.16);
    border-radius: 4px;
    display: inline-block;
    background: rgba(var(--text-link-rgb), 0.12);
    color: var(--text-link);
  }
  a:hover > code {
    background: rgba(var(--text-link-rgb), 0.16);
  }
`

export const P = styled.p`
  ${p};
`

export const Small = styled(P)`
  font-size: ${theme.fontSizes[0]};
  color: var(--text-tertiary);
  a {
    font-weight: 400;
    color: var(--text-tertiary);
  }
  a:hover {
    color: var(--text-secondary);
  }
  a:visited {
    color: var(--text-tertiary);
  }
`

export const blockquote = css`
  ${p};
  padding-left: ${theme.space[4]};
  font-style: italic;
  color: var(--text-tertiary);
  display: block;
  position: relative;
  &:before {
    content: '';
    height: 100%;
    width: 4px;
    border-radius: 4px;
    background: var(--border-primary);
    position: absolute;
    left: 0;
  }
`
export const Blockquote = styled.blockquote`
  ${blockquote};
`

export const list = css`
  ${p};
  font-weight: ${theme.fontWeights.body};
  line-height: ${theme.fontWeights.body};
  color: var(--text-secondary);
`
export const Ul = styled.ul`
  ${list};
`

export const Ol = styled.ol`
  ${list};
`

export const listItem = css`
  line-height: ${theme.lineHeights.body};
`
export const Li = styled.li`
  ${listItem}
`

export const pre = css`
  font-size: ${theme.fontSizes[0]};
  font-family: ${theme.fonts.monospace};
  padding: ${theme.space[3]};
  background: var(--bg-inset);
  text-shadow: none;
  border-radius: 8px;
  overflow-x: scroll;
  overflow-wrap: break-word;
  box-shadow: 0 0 0 1px var(--border-primary),
    inset 0 1px 4px rgba(0, 0, 0, 0.04);
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: ${theme.breakpoints[4]}) {
    font-size: ${theme.fontSizes[0]};
  }
`
export const Pre = styled.pre`
  ${pre};
`

export const code = css`
  font-size: ${theme.fontSizes[0]};
  font-family: ${theme.fonts.monospace};
  padding: ${theme.space[0]} ${theme.space[1]};
  border-radius: 4px;
  display: inline-block;
  box-shadow: none;
  background: var(--bg-inset);
  text-shadow: none;
  @media (max-width: ${theme.breakpoints[4]}) {
    font-size: ${theme.fontSizes[0]};
  }
`
export const Code = styled.code`
  ${code};
`

export const Hr = styled.hr`
  border-top: 1px solid var(--bg-inset);
  border-bottom: 0px;
  border-left: 0px;
  border-right: 0px;
`

export const A = styled.a`
  color: var(--text-link);
  font-weight: 500;
  display: inline-block;
`

export const img = css`
  max-width: 100%;
  border-radius: 4px;
`

export const Img = styled.img`
  ${img};
`
