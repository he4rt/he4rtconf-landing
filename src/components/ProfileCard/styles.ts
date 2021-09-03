import styled, { css } from 'styled-components'

import { Content } from 'components/NoticeCard/styles'
import Text from 'components/Text'
import Button from 'components/Button'

export const WrapperProfile = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: 6.5rem 6.2rem;
    border-radius: 0.6rem;
    margin: 0 6.4rem;

    ${theme.breakpoints.lessThan.md} {
      margin: 0 3.2rem;
      padding: 1rem 2rem;
    }
  `}
`

export const ContentProfile = styled(Content)`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.border};
    border-bottom: 1px solid ${theme.colors.border};
    padding: 3rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;

    ${theme.breakpoints.lessThan.md} {
      border: none;
      grid-template-columns: 1fr;
    }
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

  ${({ theme }) => css`
    ${theme.breakpoints.lessThan.md} {
      flex-direction: column;

      div:last-child {
        margin: 0;
        align-items: center;
        margin: 2rem 0;
      }
    }

    ${theme.breakpoints.greaterThan.md} {
      &:after {
        content: '';
        left: 45%;
        position: absolute;
        display: block;
        height: 100%;
        width: 2px;
        background: ${theme.colors.border};
      }
    }
  `}
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

  ${({ theme }) => css`
    ${theme.breakpoints.lessThan.md} {
      div {
        flex-direction: column;
        margin: 1rem 0;
      }
    }
  `}
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

    ${theme.breakpoints.lessThan.md} {
      margin-bottom: 1rem;
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
  ${({ theme }) => css`
    ${theme.breakpoints.lessThan.md} {
      justify-content: space-around;
      margin-bottom: 2rem;
      margin-top: 0;
    }
  `}
`

export const DeleteAccount = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    margin-right: 5rem;

    ${theme.breakpoints.lessThan.md} {
      margin-right: 0;
    }
  `}
`

export const GamificationWrapperText = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    ${theme.breakpoints.lessThan.md} {
      flex-direction: row;
    }
  `}
`

export const ButtonLink = styled(Button)`
  span {
    padding: 0.6rem 3.2rem;
  }

  margin-top: 1rem;

  ${({ theme }) => css`
    ${theme.breakpoints.lessThan.md} {
      margin-bottom: 3rem;
    }
  `}
`
