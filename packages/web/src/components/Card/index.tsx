import React from 'react'
import * as S from './style'
import * as T from '~/components/Typography'
import theme from '~/components/Theme'
import config from '~/brickwork.config'

interface Props {
  children: React.ReactNode
  image: string
  title: string
}

export default function Card({ children, image, title }: Props) {
  if (!config) {
    console.warn('No brickwork.config.js file found!')
  }

  const { storeName, owner } = config

  return (
    <S.CardContainer>
      <S.BackgroundImage className="bg-img" url={image} />
      <S.ContentWrapper>
        <T.Header
          style={{ textAlign: 'center', zIndex: 10, position: 'relative' }}
        >
          {storeName}
        </T.Header>
        <S.Image draggable={false} src={image} />
        <T.H5 style={{ marginTop: theme.space[3] }}>{title}</T.H5>
        <T.P style={{ color: 'var(--text-tertiary)' }}>Created by {owner}</T.P>
        <T.Hr style={{ margin: `${theme.space[2]} 0` }} />
        <S.Markdown className="markdown">{children}</S.Markdown>
      </S.ContentWrapper>
    </S.CardContainer>
  )
}
