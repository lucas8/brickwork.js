import styled from 'styled-components'
import { motion } from 'framer-motion'

const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 6px;
  height: 45px;
  padding: 0 20px;
  font-size: 18px;
  font-weight: 600;
  background: var(--text-link);
  color: white;
  cursor: pointer;
  white-space: nowrap;
  word-break: keep-all;
  text-align: center;
  display: inline-block;
  border: 1px solid transparent;
  box-shadow: none;
  transition: all ease 150ms;
  text-decoration: none;

  &:hover {
    background: var(--text-link-hover);
  }
  &:focus {
    box-shadow: 0 0 0 1px var(--bg-primary),
      0 0 0 2px rgba(var(--text-link-rgb), 0.5);
  }
`
const variants = {
  enter: {
    opacity: 0,
    x: 100,
  },
  view: {
    x: 0,
    opacity: 1,
  },
  exit: {
    opacity: 0,
    x: 100,
  },
}

export const AnimtedButtonContainer = styled(motion.div).attrs(() => ({
  variants,
  initial: 'enter',
  animate: 'view',
  exit: 'exit',
  transition: {
    x: { type: 'spring', stiffness: 300, damping: 200 },
    opacity: { duration: 0.5 },
  },
}))`
  display: flex;
  position: relative;

  button {
    position: absolute;
  }
`

export default Button
