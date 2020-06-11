import React from 'react'
import * as S from './style'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  price: string
}

export default function BuyButton({ price, children, ...rest }: ButtonProps) {
  return (
    <S.ButtonContainer {...rest}>
      <span>{children}</span>
      <S.PriceDisplay>{price}</S.PriceDisplay>
    </S.ButtonContainer>
  )
}
