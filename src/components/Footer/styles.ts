import Container from 'components/Container'
import Text from 'components/Text'

import styled, { css } from 'styled-components'

export const Wrapper = styled.footer``

export const FooterContent = styled.div`
  background-color: ${({ theme }) => theme.colors.purple};
  background-image: url('assets/Elements.svg');
  background-size: cover;
`

export const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 6.4rem;
  padding-top: 15.7rem;
  ${({ theme }) => css`
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
