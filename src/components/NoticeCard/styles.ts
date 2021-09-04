import Container from 'components/Container'

import styled, { css } from 'styled-components'

export const WrapperNoticeCard = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: 6px;
    padding: 8.4rem 9.6rem;
    margin: 0 6.4rem;
    position: relative;
    bottom: -10rem;
    ${theme.breakpoints.lessThan.md} {
      margin: 0 3.2rem;
      padding: 1rem 2rem;
    }
  `}

  h2 {
    margin-bottom: 3.2rem;
  }

  h3 {
    margin-bottom: 2.2rem;
  }
`

export const Content = styled(Container)`
  ${({ theme }) => css`
    ${theme.breakpoints.lessThan.md} {
      padding: 1rem;
    }
  `}
`
