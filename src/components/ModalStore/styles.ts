import styled, { css } from 'styled-components'
import Modal from 'react-modal'

export const Wrapper = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
`

export const Card = styled.div`
  background: #181818;
  padding: 3.5rem;
  border-radius: 0.6rem;
  width: 600px;
`

export const ImageOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
`
