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
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    padding: 10rem;
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
`

export const IconWrapper = styled.a`
  padding: 1rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.purple};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    height: 2rem;
    width: 2rem;
  }
`
