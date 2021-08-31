import Text from 'components/Text'
import Title from 'components/Title'

import styled, { css } from 'styled-components'
import { OpenedProps } from '.'

export const WrapperFaq = styled.div`
  color: #fff;
  padding: 24px 0;
  border-bottom: 1px solid #151515;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  &:hover > h3 {
    color: ${({ theme }) => theme.colors.purple};
    transition: 0.5s;
  }
`

export const Question = styled(Title)<OpenedProps>`
  ${({ theme, opened }) => css`
    color: ${opened ? theme.colors.purple : theme.colors.gray};
    transition: 0.5s;
  `}
`

export const Answer = styled(Text)<OpenedProps>`
  ${({ theme, opened }) => css`
    ${!opened && `display: none;`}
    margin-top: 2.4rem;
    color: ${theme.colors.white};
  `}
`

export const Arrow = styled.button<OpenedProps>`
  ${({ opened }) => css`
    ${!opened && `transform: rotate(180deg);`}
    background: transparent;
    border: none;
    cursor: pointer;
  `}
`
