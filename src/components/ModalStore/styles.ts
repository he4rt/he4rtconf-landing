import styled, { css } from 'styled-components'
import Modal from 'react-modal'
import Text from 'components/Text'
import Container from 'components/Container'

export const Wrapper = styled(Container)``

export const Card = styled.div`
  background: #181818;
  padding: 3.5rem;
  border-radius: 0.6rem;
`

export const ImageOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Error = styled(Text)`
  margin-top: 1.5rem;
  color: red;
  a {
    color: red;
    font-weight: bold;
  }
`

export const Button = styled.button`
  background-color: #782bf1;
  color: white;
  font-weight: 800;
  font-size: 18px;
  width: 100%;
  padding: 1.2rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: black;
  font-weight: 800;
  color: white;
`
