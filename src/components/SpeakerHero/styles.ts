import Container from 'components/Container'
import Text from 'components/Text'
import styled, { css } from 'styled-components'

export const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #181818;
  padding-bottom: 4rem;
  margin-bottom: 4rem;
`

export const AvatarImageBox = styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  margin-bottom: 4rem;

  img {
    width: 100%;
    border-radius: 50%;
  }
`

export const Description = styled(Text)`
  margin: 3.2rem 0;
  font-size: ${({ theme }) => theme.font.sizes.medium};
`

export const Talk = styled(Text)`
  margin-bottom: 1.6rem;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
  `}
`
