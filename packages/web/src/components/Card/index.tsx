import React from 'react'
import * as S from './style'

interface Props {
  children: React.ReactNode
}

export default function Card({ children }: Props) {
  return <S.CardContainer>{children}</S.CardContainer>
}
