import styled, { css } from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  ${({ theme }) => css`
    ${theme.breakpoints.greaterThan.sm} {
      max-width: ${theme.container.sm};
    }
    ${theme.breakpoints.greaterThan.md} {
      max-width: ${theme.container.md};
    }
    ${theme.breakpoints.greaterThan.lg} {
      max-width: ${theme.container.lg};
    }
    ${theme.breakpoints.greaterThan.xl} {
      max-width: ${theme.container.xl};
    }
  `}
`

export default Container
