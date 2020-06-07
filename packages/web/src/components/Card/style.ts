import styled from 'styled-components'
import theme from '~/components/Theme'
import { Img } from '~/components/Typography'

export const CardContainer = styled.div`
  width: 100%;
  max-width: 550px;
  max-height: 80%;
  background: var(--bg-primary);
  box-shadow: ${theme.shadows.largeHover};
  border-radius: 10px;
  padding: ${theme.space[4]};
  overflow: hidden;
  position: relative;
`

export const Image = styled(Img)`
  margin-top: ${theme.space[3]};
  width: 100%;
  height: 200px;
  object-fit: cover;
  z-index: 10;
  position: relative;
`

export const BackgroundImage = styled.div<{ url: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50%;
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
  z-index: 1;
`
