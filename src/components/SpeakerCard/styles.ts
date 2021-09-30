import styled, { css } from 'styled-components'

import Title from 'components/Title'
import Link from 'next/link'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondBlack};

    &:after {
      background: ${theme.colors.purpleLightGradient};
    }
  `}

  background: #0a0a0a;
  padding: 5rem 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding-bottom: 10rem;

  &:after {
    position: absolute;
    display: block;
    content: '';
    bottom: -2px;
    width: 100%;
    height: 2px;
  }
`

export const Avatar = styled.div`
  width: 100%;
  height: 12.4rem;
  width: 12.4rem;
  position: relative;
  background: transparent;
  border-radius: 999px;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 999px;
  }
`

export const Name = styled(Title)`
  margin-top: 16px;
  margin-bottom: 6px;
  text-align: center;
  letter-spacing: -0.02em;
`

export const Stack = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
  `}

  text-align: center;
  letter-spacing: -0.02em;
`

export const WrapperIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  a {
    margin-right: 3rem;
    text-decoration: none;

    &:last-child {
      margin-right: 0;
    }
  }

  svg {
    width: 2.2rem;
    height: 2.2rem;
    cursor: pointer;

    ${({ theme }) => css`
      color: ${theme.colors.white};
      transition: color 0.3s ease-in-out;

      &:hover {
        color: ${theme.colors.purple};
      }
    `}
  }
`

export const Button = styled.button`
  background: none;
  border: none;
  width: 100%;
  bottom: 0;
  position: absolute;
  padding: 2rem 0;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  svg {
    margin-left: 2rem;
  }

  ${({ theme }) => css`
    border-top: 1px solid #181818;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${theme.colors.purple};
    }
  `}
`
