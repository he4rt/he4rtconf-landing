import styled, { css } from 'styled-components'

import NoticeCard from 'components/NoticeCard'

export const Card = styled(NoticeCard)`
  position: unset !important;
`

export const WrapperButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4.2rem;

  > button {
    margin-right: 4.2rem;
  }

  ${({ theme }) => css`
    ${theme.breakpoints.lessThan.md} {
      flex-direction: column;

      > button {
        margin-right: 0;
        width: 100%;
        margin-bottom: 2rem;
      }
    }
  `}
`
