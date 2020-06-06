import styled from 'styled-components'
import theme from '~/components/Theme'

export const PageContainer = styled.div`
  height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const PageWrapper = styled.main.attrs(() => ({ role: 'main' }))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  flex: 1 0 auto;
  width: 100%;
  padding: ${theme.space[3]};

  @media (max-width: ${theme.breakpoints[4]}) {
    max-width: 100%;
  }
`

export const CenteredLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
