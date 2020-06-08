import styled from 'styled-components'

const Input = styled.input`
  outline: none;
  display: inline-block;
  background: transparent;
  font-weight: 600;
  height: 55px;
  width: 100%;
  padding: 20px;
  font-size: 0.875rem;
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  color: var(--text-primary);
  transition: all ease 150ms;
  box-shadow: none;

  &:focus {
    box-shadow: 0 0 0 1px var(--bg-primary), 0 0 0 2px var(--border-secondary);
  }
`

export default Input
