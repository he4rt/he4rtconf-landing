import styled, { css, DefaultTheme } from 'styled-components'

type HighlightProps = {
  fontWeight: 'semibold' | 'light'
  size: 'small' | 'huge'
}

const wrapperHighlightModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    ${theme.breakpoints.lessThan.md} {
      font-size: ${theme.font.sizes.small};
    }
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};

    ${theme.breakpoints.lessThan.md} {
      font-size: ${theme.font.sizes.large};
    }
  `
}

const Highlight = styled.span<HighlightProps>`
  ${({ theme, size, fontWeight }) => css`
    color: ${theme.colors.purple};
    font-weight: ${theme.font.weight[fontWeight]};
    font-size: ${theme.font.sizes.huge};
    letter-spacing: -0.02em;

    ${theme.breakpoints.lessThan.md} {
      font-size: ${theme.font.sizes.large};
    }

    ${!!size && wrapperHighlightModifiers[size](theme)}
  `}
`

export default Highlight
