import styled, { css } from 'styled-components'

export const WrapperText = styled.p`
  line-height: 2.8rem;
  letter-spacing: -0.02em;

  ${({ theme }) => css`
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};

    ${theme.breakpoints.lessThan.md} {
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`
