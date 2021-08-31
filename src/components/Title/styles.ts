import styled, { css, DefaultTheme } from 'styled-components'

import { TitleProps } from '.'

const wrapperTitleModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `
}

export const WrapperTitle = styled.h1.attrs<TitleProps>(({ level }) => ({
  as: `h${level}`
}))<TitleProps>`
  ${({ theme, fontWeight, size, color, center }) => css`
    font-weight: ${fontWeight};
    color: ${theme.colors[color]};
    letter-spacing: -0.02em;

    ${center && 'text-align: center;'}
    ${!!size && wrapperTitleModifiers[size](theme)}
  `}
`
