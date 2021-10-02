import styled, { css } from 'styled-components'

import Text from 'components/Text'

export const Tag = styled(Text)`
  ${({ theme }) => css`
    margin-top: 1.6rem;
    margin-bottom: 3.2rem;
    color: ${theme.colors.purple};
  `}
`

export const Stock = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.green};
  `}
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > img {
    width: 20rem;
  }
`

export const Box = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    padding: 3rem;
    gap: 1.5rem;
    display: flex;
    justify-content: space-between;
  `}
`

export const SubItem = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 4rem;
    margin-right: 1rem;
  }

  ${({ theme }) => css`
    div {
      &::last-child {
        border-right: none;
      }
    }
  `}
`

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
`

export const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    h5 {
      margin-left: 2rem;
    }
  }
`

export const IconWrapper = styled.a`
  padding: 1rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.purple};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  > svg {
    height: 3rem;
    width: 3rem;
  }
`
