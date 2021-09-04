import Container from 'components/Container'
import Text from 'components/Text'

import styled, { css } from 'styled-components'
import { FooterProps } from '.'

export const Wrapper = styled.footer<FooterProps>`
  ${({ notice }) => !notice && 'margin-top: 15rem;'}
`

export const FooterContent = styled.div`
  background-color: ${({ theme }) => theme.colors.purple};
  background-image: url('assets/Elements.svg');
  background-size: cover;
`

export const Content = styled(Container)<FooterProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 6.4rem;

  ${({ theme, notice }) => css`
    ${notice ? 'padding-top: 15.7rem' : 'padding-top: 6.4rem'};

    ${theme.breakpoints.lessThan.md} {
      flex-direction: column;
    }
  `}
`

export const Contributors = styled(Text)`
  ${({ theme }) => css`
    ${theme.breakpoints.lessThan.md} {
      margin-top: 2rem;
    }

    color: ${theme.colors.white};
    text-align: center;

    a {
      color: ${theme.colors.border};
      font-weight: 700;
      text-decoration: none;
    }
  `}
`
