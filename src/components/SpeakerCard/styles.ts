import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #0a0a0a;
  padding: 5rem 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  &:after {
    position: absolute;
    display: block;
    content: '';
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: linear-gradient(356.91deg, #782cf0 -7.12%, #996cdf 133.4%);
  }
`

export const Avatar = styled.div`
  width: 100%;
  height: 12.4rem;
  width: 12.4rem;
  position: relative;
  background: transparent;
  border-radius: 999px;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 999px;
  }
`

export const Name = styled.h3`
  color: #f7f7f7;
  margin-top: 16px;
  margin-bottom: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  text-align: center;
  letter-spacing: -0.02em;
`

export const Stack = styled.span`
  color: #6d6b70;
  font-size: 18px;
  text-align: center;
  letter-spacing: -0.02em;
`

export const Description = styled.p`
  color: #f7f7f7;
  text-align: center;
  font-size: 1.8rem;
  margin-top: 1.6rem;
  letter-spacing: -0.02em;
`
