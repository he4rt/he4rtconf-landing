import styled, { css } from 'styled-components'

import Container from 'components/Container'
import { Content } from 'components/NoticeCard/styles'
import Text from 'components/Text'

export const WrapperProfile = styled(Container)`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: 6.5rem 6.2rem;
    border-radius: 0.6rem;
  `}
`

export const ContentProfile = styled(Content)`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.border};
    border-bottom: 1px solid ${theme.colors.border};
    padding: 3rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
  `}
`

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  div:last-child {
    display: flex;
    flex-direction: column;
    margin-left: 4.5rem;

    > p {
      margin: 0.8rem 0%;
    }
  }

  &:after {
    content: '';
    left: 45%;
    position: absolute;
    display: block;
    height: 100%;
    width: 2px;
    background: ${({ theme }) => theme.colors.border};
  }
`

export const ImageBox = styled.div`
  ${({ theme }) => css`
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background: ${theme.colors.primary};

    img {
      width: 100%;
      border-radius: 50%;
    }
  `}
`

export const Gamification = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 1.2rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const GamificationText = styled(Text)`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    color: ${theme.colors.white};

    svg {
      color: ${theme.colors.purple};
      margin-right: 2rem;
      width: 2.6rem;
      height: 2.6rem;
    }
  `}
`
export const RevokeLinks = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;

  p {
    cursor: pointer;
  }
`

export const DeleteAccount = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    margin-right: 5rem;
  `}
`
