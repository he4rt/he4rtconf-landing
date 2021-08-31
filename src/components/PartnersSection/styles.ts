import Container from 'components/Container'
import styled from 'styled-components'

export const Wrapper = styled(Container)`
  padding-top: 15rem;
  padding-bottom: 15rem;
  h2 {
    margin-bottom: 6rem;
  }
`

export const PartnersList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 2fr));
  gap: 3.2rem;
`
