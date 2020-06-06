import styled from 'styled-components'
import theme from '~/components/Theme'

export const PageContainer = styled.div`
  height: 100%;
  max-width: 100%;
  background: var(--bg-primary);
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

export const CenterColumn = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  justify-content: center;
  width: 100%;
  max-width: 640px;

  @media (max-width: 640px) {
    min-width: 100%;
    max-width: 100%;
  }
`
