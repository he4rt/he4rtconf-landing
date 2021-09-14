import styled, { css } from 'styled-components'

import Text from 'components/Text'

type StyleTabProps = {
  isActive?: boolean
}

export const WrapperTab = styled.li<StyleTabProps>`
  margin-right: 7rem;

  ${({ theme, isActive }) => css`
    background: ${isActive ? theme.colors.purpleLightGradient : 'transparent'};
    padding: 0.6rem 2rem;
    border-radius: 0.6rem;

    ${theme.breakpoints.lessThan.md} {
      margin-right: 3rem;
    }
  `}
`

export const TextTab = styled(Text)<StyleTabProps>`
  ${({ theme, isActive }) => css`
    cursor: pointer;
    color: ${isActive ? theme.colors.white : theme.colors.lightGray};
  `}
`
