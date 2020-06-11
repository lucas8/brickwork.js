import styled from 'styled-components'
import theme from '~/components/Theme'
import { Img } from '~/components/Typography'

export const Image = styled(Img)`
  margin-top: ${theme.space[3]};
  width: 100%;
  height: 200px;
  object-fit: cover;
  position: relative;
`

export const BackgroundImage = styled.div<{ url: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50%;
  opacity: 0.6;
  background-image: linear-gradient(
      180deg,
      rgba(var(--bg-primary-rgb), 0.65) 0%,
      var(--bg-primary) 100%
    ),
    url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  filter: blur(30px);
  z-index: 0;
`

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
`

export const Markdown = styled.div`
  overflow: scroll;
  max-height: 200px;
  overflow-x: hidden;

  :hover {
    /* width */
    ::-webkit-scrollbar {
      transition: all ease 150ms;
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: var(--bg-inset);
      border-radius: 5px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--border-primary);
      transition: background ease 150ms;
      border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: var(--border-secondary);
    }
  }
`
