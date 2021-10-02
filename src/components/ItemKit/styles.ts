import styled, { css } from 'styled-components'

import Text from 'components/Text'

export const Tag = styled(Text)`
  ${({ theme }) => css`
    margin-top: 1rem;
    color: ${theme.colors.purple};
  `}
`

export const Stock = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.green};
  `}
`

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
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
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  > svg {
    height: 3rem;
    width: 3rem;
  }
`
