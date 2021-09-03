import styled, { css } from 'styled-components'

export const WrapperButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.purpleLightGradient};
    position: relative;
    z-index: 1;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: ${theme.font.weight.normal};
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.white};
      z-index: 3;
      position: relative;
      padding: 1.6rem 3.2rem;

      > svg {
        margin-right: 1.6rem;
      }

      ${theme.breakpoints.lessThan.md} {
        font-size: ${theme.font.sizes.xsmall};
      }
    }

    &:after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-image: ${theme.colors.purpleDarkGradient};
      z-index: 2;
      opacity: 0;
      border-radius: 6px;
      transition: opacity 0.4s ease-out;
    }

    &:hover:after {
      opacity: 1;
    }
  `}

  border-radius: 6px;
  border: none;
  outline: none;
  cursor: pointer;
`
