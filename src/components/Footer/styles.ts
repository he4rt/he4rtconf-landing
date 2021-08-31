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
`

export const Contributors = styled(Text)`
  color: ${({ theme }) => theme.colors.white};

  a {
    color: ${({ theme }) => theme.colors.background};
    font-weight: 700;
    text-decoration: none;
  }
`
