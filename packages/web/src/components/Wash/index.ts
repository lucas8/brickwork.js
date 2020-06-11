import styled from 'styled-components'
import { motion } from 'framer-motion'

const Wash = styled(motion.div).attrs(() => ({
  variants: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  },
  transition: {
    opacity: { duration: 1 },
  },
}))`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(var(--bg-primary-rgb), 0.2);
`

export default Wash
