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
  ${({ theme, fontWeight, size, color }) => css`
    font-weight: ${fontWeight};
    /* TODO mudar a verificação quando tiver o theme para passar somente as cores */
    color: ${theme.colors[color]};
    letter-spacing: -0.02em;

    ${!!size && wrapperTitleModifiers[size](theme)}
  `}
`
