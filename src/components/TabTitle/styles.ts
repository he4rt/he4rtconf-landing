import styled, { css } from 'styled-components'

import Text from 'components/Text'

type StyleTabProps = {
  isActive?: boolean
}

export const WrapperTab = styled.li<StyleTabProps>`
  margin-right: 7rem;

  ${({ theme, isActive }) => css`
    border-bottom: 1px solid ${isActive ? theme.colors.purple : 'transparent'};

    ${theme.breakpoints.lessThan.md} {
      margin-right: 3rem;
    }
  `}
`

export const TextTab = styled(Text)<StyleTabProps>`
  ${({ theme, isActive }) => css`
    cursor: pointer;
    color: ${isActive ? theme.colors.purple : theme.colors.white};
  `}
`
