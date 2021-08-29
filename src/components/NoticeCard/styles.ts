import styled, { css } from 'styled-components'

export const WrapperNoticeCard = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: 6px;
    padding: 8.4rem 9.6rem;
  `}

  h2 {
    margin-bottom: 3.2rem;
  }
`

export const Form = styled.div`
  display: flex;
  margin-top: 3.6rem;
`
