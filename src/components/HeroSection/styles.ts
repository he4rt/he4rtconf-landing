import Container from 'components/Container'
import Text from 'components/Text'

import styled, { css } from 'styled-components'

export const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  padding-top: 15rem;
  padding-bottom: 15rem;

  h3 {
    margin-top: 1.6rem;
  }

  button {
    margin-top: 3.2rem;
  }

  a {
    text-decoration: none;
  }
`

export const Info = styled.div`
  max-width: 57rem;
`

export const HeartBox = styled.div`
  position: absolute;
  right: -30%;
  ${({ theme }) => css`
    ${theme.breakpoints.lessThan.md} {
      opacity: 0.5;
    }
  `}
`
export const Error = styled(Text)`
  margin-top: 1.5rem;
  color: red;
`
