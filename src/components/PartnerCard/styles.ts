import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondBlack};
  `}

  padding: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;

  &:hover > div {
    filter: grayscale(0);
    transition: filter 1s;
  }
`

export const Logo = styled.div`
  width: 100%;
  height: 12.4rem;
  width: 12.4rem;
  position: relative;
  background: transparent;
  border-radius: 999px;
  filter: grayscale(1);
  transition: filter 1s;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 999px;
  }
`
