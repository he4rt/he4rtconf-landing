import Container from 'components/Container'
import styled, { css } from 'styled-components'

export const Wrapper = styled(Container)`
  padding-top: 15rem;
  padding-bottom: 15rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const ImageBox = styled.div`
  position: absolute;
  height: 48rem;
  width: 72rem;
  left: -30%;
  ${({ theme }) => css`
    ${theme.breakpoints.lessThan.md} {
      display: none;
    }
  `}
`

export const Info = styled.div`
  max-width: 64rem;

  h2 {
    margin-bottom: 3.2rem;
  }
  p:not(:first-child) {
    margin-top: 2.4rem;
  }
`
