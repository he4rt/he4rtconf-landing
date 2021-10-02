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
  color: #ef4444;
  a {
    color: #ef4444;
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

export const InputWrapper = styled.div`
  margin: 5rem 0;
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
  margin-top: 1.5rem;
`

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    display: block;
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 0.2rem;
  margin: 3.5rem 0;
  background-color: ${({ theme }) => theme.colors.gray};
`
