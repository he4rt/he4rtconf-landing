import Container from 'components/Container'
import Image from 'next/image'
import styled from 'styled-components'

export const Wrapper = styled(Container)`
  border-bottom: 1px solid #181818;
  padding-bottom: 4rem;
  margin-bottom: 4rem;
`

export const ListenerUser = styled.a`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
`

export const ListenerImage = styled(Image)`
  border-radius: 50%;
`

export const ListenerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Listeners = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 4rem;
  flex-wrap: wrap;
`
