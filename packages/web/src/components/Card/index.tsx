import React from 'react'
import * as S from './style'
import * as T from '~/components/Typography'
import theme from '~/components/Theme'

interface Props {
  children: React.ReactNode
}
const image =
  'https://images.unsplash.com/photo-1591393223703-56fe1347ac62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'

export default function Card({ children }: Props) {
  return (
    <S.CardContainer>
      <S.BackgroundImage className="bg-img" url={image} />
      <S.ContentWrapper>
        <T.Header
          style={{ textAlign: 'center', zIndex: 10, position: 'relative' }}
        >
          Refactoring UI
        </T.Header>
        <S.Image draggable={false} src={image} />
        <T.H5 style={{ marginTop: theme.space[3] }}>
          Hardcover Collectors Edition
        </T.H5>
        <T.P style={{ color: 'var(--text-tertiary)' }}>
          Created by Steve Schoger
        </T.P>
        <T.Hr style={{ margin: `${theme.space[2]} 0` }} />
        {children}
      </S.ContentWrapper>
    </S.CardContainer>
  )
}
