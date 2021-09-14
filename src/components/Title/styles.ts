import styled, { css, DefaultTheme } from 'styled-components'

import { TitleProps } from '.'

const wrapperTitleModifiers = {
  xxsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};

    ${theme.breakpoints.lessThan.md} {
      font-size: ${theme.font.sizes.xxsmall};
    }
  `,

  xsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};

    ${theme.breakpoints.lessThan.md} {
      font-size: ${theme.font.sizes.xsmall};
    }
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    ${theme.breakpoints.lessThan.md} {
      font-size: ${theme.font.sizes.small};
    }
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};

    ${theme.breakpoints.lessThan.md} {
      font-size: ${theme.font.sizes.medium};
    }
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};

    ${theme.breakpoints.lessThan.md} {
      font-size: ${theme.font.sizes.large};
    }
  `
}

export const WrapperTitle = styled.h1.attrs<TitleProps>(({ level }) => ({
  as: `h${level}`
}))<TitleProps>`
  ${({ theme, fontWeight, size, color, center }) => css`
    font-weight: ${theme.font.weight[fontWeight]};
    color: ${theme.colors[color]};
    letter-spacing: -0.02em;

    ${center && 'text-align: center;'}
    ${!!size && wrapperTitleModifiers[size](theme)}
  `}
`
