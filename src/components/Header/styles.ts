import Container from 'components/Container'
import Image from 'next/image'

import styled, { css } from 'styled-components'

import { HeaderProps, MobileHeaderProps } from '.'

export const Logo = styled(Image)`
  ${({ theme }) => css`
    ${theme.breakpoints.lessThan.lg} {
      margin-left: 3.2rem !important;
    }
  `}
`

export const WrapperLinks = styled.nav`
  display: flex;
  align-items: center;
`

export const WrapperMenu = styled.menu<Pick<MobileHeaderProps, 'isOpen'>>`
  ${({ theme, isOpen }) => css`
    ${theme.breakpoints.greaterThan.lg} {
      display: none;
    }

    background-color: ${theme.colors.background};
    position: fixed;
    top: 0;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    z-index: 20;
    height: 100vh;
    width: 100vw;

    > svg {
      position: absolute;
      top: 3rem;
      right: 3.2rem;
      cursor: pointer;
      color: ${theme.colors.white};
    }
  `}
`

export const MobileWrapper = styled.div`
  ${({ theme }) => css`
    > svg {
      color: ${theme.colors.white};
    }
    cursor: pointer;
    ${theme.breakpoints.lessThan.lg} {
      margin-right: 3.2rem;
    }
  `}
`

export const WrapperHeader = styled(Container)<HeaderProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 5rem 0;

  ${({ theme, accessToken }) => css`
    ${theme.breakpoints.lessThan.lg} {
      padding: 2rem 0;
      margin-bottom: 4rem;
      justify-content: ${!accessToken ? 'space-between' : 'center'};

      ${WrapperLinks} {
        display: none;
      }
    }

    ${MobileWrapper} {
      ${theme.breakpoints.greaterThan.lg} {
        display: none;
      }
    }
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};

    &:hover {
      color: ${theme.colors.purple};
    }

    svg {
      display: block;
    }
  `}

  line-height: 2.3rem;
  letter-spacing: -0.02em;
  cursor: pointer;
  margin-right: 2.2rem;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }
`

export const IconsMobile = styled.div`
  display: flex;

  ${Link} {
    margin-right: 2.5rem;
  }
  ${Link}:last-child {
    margin-right: 0;
  }
`

export const MenuNav = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

  ${Link} {
    margin: 2.4rem 0;
    ${({ theme }) => css`
      font-size: ${theme.font.sizes.medium};
    `}
  }

  ${({ theme }) => css`
    ${theme.breakpoints.greaterThan.lg} {
      margin-left: 2.4rem;
    }
  `}
`
