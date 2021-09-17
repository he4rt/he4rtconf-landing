import styled, { css } from 'styled-components'

import { PartnerProps } from '.'

export const Wrapper = styled.div<Pick<PartnerProps, 'tier'>>`
  ${({ theme, tier }) => css`
    background-color: ${theme.colors.secondBlack};
    padding: ${tier !== 4 ? '5rem' : '8rem'};
  `}

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;

  &:hover > a {
    filter: grayscale(0);
    transition: filter 1s;
  }
`

export const Logo = styled.a<Pick<PartnerProps, 'tier'>>`
  position: relative;
  background: transparent;
  border-radius: 999px;
  filter: grayscale(1);
  transition: filter 1s;

  ${({ tier }) => css`
    height: ${tier !== 4 ? '12.2rem' : '12.6rem'};
    width: ${tier !== 4 ? '12.2rem' : '20.6rem'};
  `}

  img {
    width: 100%;
    object-fit: cover;
  }
`
