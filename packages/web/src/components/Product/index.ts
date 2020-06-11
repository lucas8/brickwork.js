import styled from 'styled-components'
import { motion } from 'framer-motion'
import theme from '~/components/Theme'

interface Props {
  state: string
}

export const OverlayContainer = styled(motion.div).attrs(
  ({ state }: Props) => ({
    variants: {
      initial: {
        height: 650,
      },
      card: {
        height: 650,
      },
      pay: {
        height: 400,
      },
    },
    animate: state,
    transition: {
      ease: 'easeInOut',
      type: 'spring',
      stiffness: 200,
      damping: 30,
    },
  })
)<Props>`
  overflow: hidden;
  z-index: 5;
  background: var(--bg-primary);
  box-shadow: ${theme.shadows.largeHover};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  width: 500px;
`

const variants = {
  left: {
    x: '-100%',
    opacity: 0,
  },
  right: {
    x: '100%',
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
  },
}

export const InnerContainer = styled(motion.div).attrs(({ state }: Props) => ({
  variants,
  initial: state,
  animate: 'center',
  exit: state,
  transition: {
    x: { type: 'spring', stiffness: 300, damping: 200 },
    opacity: { duration: 0.5 },
  },
}))<Props>`
  transform-origin: center;
  position: absolute;
  height: auto;
  left: 0;
  top: 0;
  padding: ${theme.space[4]};
  width: 100%;
  /* width: 100%;
  max-height: 100%;
  max-width: 550px;
  */
`
