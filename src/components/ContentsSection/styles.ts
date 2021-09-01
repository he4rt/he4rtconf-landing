import Container from 'components/Container'
import Title from 'components/Title'
import styled from 'styled-components'

export const Wrapper = styled(Container)`
  padding-top: 15rem;
  padding-bottom: 15rem;

  h2 {
    margin-bottom: 1.6rem;
  }
`

export const Description = styled(Title)`
  max-width: 67rem;
  margin: 0 auto;
  margin-bottom: 8rem;
`

export const ContentsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 2fr));
  gap: 3.2rem;
`
