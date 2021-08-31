import Container from 'components/Container'
import styled from 'styled-components'

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
`

export const Info = styled.div`
  max-width: 57rem;
`

export const HeartBox = styled.div`
  position: absolute;
  right: -10rem;
  bottom: 13rem;
`
