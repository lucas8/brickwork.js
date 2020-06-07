import React from 'react'
import * as S from './style'
import Background from '~/components/Background'

interface Props {
  children?: React.ReactNode
  withBackground?: boolean
}

export default function Layout({ children, withBackground = true }: Props) {
  return (
    <S.PageContainer>
      {withBackground && <Background />}
      <S.PageWrapper>{children}</S.PageWrapper>
    </S.PageContainer>
  )
}

const { CenteredLayoutContainer, CenterColumn } = S
export { CenteredLayoutContainer, CenterColumn }
