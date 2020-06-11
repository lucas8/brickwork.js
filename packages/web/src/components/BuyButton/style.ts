import styled from 'styled-components'
import Button from '~/components/Button'

export const ButtonContainer = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 0;
  overflow: hidden;
  margin-bottom: 4px;
  margin-right: 4px;
  margin-top: 18px;
  margin-left: auto;
`

export const PriceDisplay = styled.div`
  height: 100%;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  margin-left: 18px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-items: center;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
`
