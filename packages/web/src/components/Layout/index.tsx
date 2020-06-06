import React from 'react'
import * as S from './style'
import Background from '../Background'

interface Props {
  children?: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <S.PageContainer>
      <Background />
      <S.PageWrapper>{children}</S.PageWrapper>
    </S.PageContainer>
  )
}

const { CenteredLayoutContainer } = S
export { CenteredLayoutContainer }
