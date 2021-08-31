import styled, { css } from 'styled-components'

export const WrapperHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 5rem 15rem;
`

export const WrapperLinks = styled.nav`
  display: flex;
  align-items: center;
`

export const Link = styled.a`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};

    &:hover {
      color: ${theme.colors.purple};
    }
  `}

  line-height: 2.3rem;
  letter-spacing: -0.02em;
  cursor: pointer;
  margin-right: 3.2rem;

  &:last-child {
    margin-right: 0;
  }
`
