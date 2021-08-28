import styled from 'styled-components'

export const WrapperHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 5rem 15rem;
`

export const WrapperLinks = styled.div`
  display: flex;
  align-items: center;
`

export const Link = styled.a`
  font-family: 'DM Sans';
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.3rem;
  letter-spacing: -0.02em;
  color: #f7f7f7;
  cursor: pointer;
  margin-right: 3.2rem;

  &:hover {
    color: #782bf1;
  }

  &:last-child {
    margin-right: 0;
  }
`
