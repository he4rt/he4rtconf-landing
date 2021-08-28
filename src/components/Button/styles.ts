import styled, { css } from 'styled-components'

export const WrapperButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.purpleLightGradient};
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.sizes.small};

    &:hover {
      background: ${theme.colors.purpleDarkGradient};
    }
  `}

  padding: 1.6rem 3.2rem;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  outline: none;
  cursor: pointer;
`
