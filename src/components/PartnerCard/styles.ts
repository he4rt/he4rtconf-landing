import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondBlack};
  `}

  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;

  &:hover > a {
    filter: grayscale(0);
    transition: filter 1s;
  }
  &:last-child {
    justify-self: center;
    grid-column-start: span 5;
    min-width: 25rem;
  }
`

export const Logo = styled.a`
  width: 100%;
  height: 12.6rem;
  width: 12.6rem;
  position: relative;
  background: transparent;
  border-radius: 999px;
  filter: grayscale(1);
  transition: filter 1s;

  img {
    width: 100%;
    object-fit: cover;
  }
`
