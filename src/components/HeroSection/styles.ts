import Container from 'components/Container'
import Text from 'components/Text'

import styled, { css } from 'styled-components'

export const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15rem;
  padding-bottom: 15rem;
  z-index: 1;

  h3 {
    margin-top: 1.6rem;
  }

  button {
    margin-top: 3.2rem;
  }

  button > a {
    text-decoration: none;
  }

  ${({ theme }) => css`
    ${theme.breakpoints.lessThan.md} {
      flex-direction: column;
    }
  `}
`

export const Info = styled.div`
  max-width: 57rem;
`

export const HeartBox = styled.div`
  position: absolute;
  right: -30%;
  top: 0;
  z-index: -1;
  ${({ theme }) => css`
    ${theme.breakpoints.lessThan.md} {
      opacity: 0.5;
    }
  `}
`
export const Error = styled(Text)`
  margin-top: 1.5rem;
  color: #ef4444;
  a {
    color: #ef4444;
    font-weight: bold;
  }
`

export const ShareWrapper = styled.div`
  .ticket-buttons {
    display: flex;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ${({ theme }) => css`
    ${theme.breakpoints.lessThan.md} {
      transform: scale(0.95);
      /* TODO: Fixar essa gambiarra, fiz ela pois o ticket ta com tamanhos pré-fixados */
    }
    ${theme.breakpoints.lessThan.sm} {
      transform: scale(0.7);
      /* TODO: Fixar essa gambiarra, fiz ela pois o ticket ta com tamanhos pré-fixados */
    }
  `}
`
