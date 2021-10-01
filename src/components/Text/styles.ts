import styled, { css } from 'styled-components'
import { TextProps } from '.'

export const WrapperText = styled.p<TextProps>`
  line-height: 2.8rem;
  letter-spacing: -0.02em;

  ${({ theme, center }) => css`
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};

    ${theme.breakpoints.lessThan.md} {
      font-size: ${theme.font.sizes.xsmall};
    }

    a {
      color: ${theme.colors.purple};
      text-decoration: underline;
    }

    ${center && 'text-align: center;'}
  `}
`
