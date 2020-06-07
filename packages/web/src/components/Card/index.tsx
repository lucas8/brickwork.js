import React from 'react'
import * as S from './style'
import * as T from '~/components/Typography'
import theme from '~/components/Theme'

interface Props {
  children: React.ReactNode
  image: string
  title: string
}

export default function Card({ children, image, title }: Props) {
  return (
    <S.CardContainer>
      <S.BackgroundImage className="bg-img" url={image} />
      <S.ContentWrapper>
        <T.Header
          style={{ textAlign: 'center', zIndex: 10, position: 'relative' }}
        >
          Google Inc
        </T.Header>
        <S.Image draggable={false} src={image} />
        <T.H5 style={{ marginTop: theme.space[3] }}>{title}</T.H5>
        <T.P style={{ color: 'var(--text-tertiary)' }}>
          Created by Lucas Stettner
        </T.P>
        <T.Hr style={{ margin: `${theme.space[2]} 0` }} />
        <S.Markdown className="markdown">{children}</S.Markdown>
      </S.ContentWrapper>
    </S.CardContainer>
  )
}
