import styled from 'styled-components'

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
`
