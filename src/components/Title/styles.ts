import styled, { css } from 'styled-components'

import { TitleProps } from '.'

const wrapperTitleModifiers = {
  small: () => css`
    font-size: 3.6rem;
  `,

  huge: () => css`
    font-size: 5.2rem;
  `
}

export const WrapperTitle = styled.h1.attrs<TitleProps>(({ level }) => ({
  as: `h${level}`
}))<TitleProps>`
  ${({ fontWeight, size }) => css`
    font-weight: ${fontWeight};
    color: #f7f7f7;
    letter-spacing: -0.02em;

    ${!!size && wrapperTitleModifiers[size]}
  `}
`
