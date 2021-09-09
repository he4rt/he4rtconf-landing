import styled, { css, DefaultTheme } from 'styled-components'

import Text from 'components/Text'
import Title from 'components/Title'
import { TimelineItemProps } from '.'

export const WrapperTimeline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7rem;
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.border};
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    margin-bottom: 1rem;
  }
`

export const Speaker = styled(Title)`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
  `}
`

const tagModifiers = (
  { tag }: Pick<TimelineItemProps, 'tag'>,
  theme: DefaultTheme
) => {
  if (tag === 'Ao vivo agora') {
    return theme.colors.red
  }

  if (tag === 'Em breve') {
    return theme.colors.green
  }

  return theme.colors.gray
}

export const Tag = styled(Text)<Pick<TimelineItemProps, 'tag'>>`
  ${({ theme, tag }) => css`
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.xsmall};

    color: ${tagModifiers({ tag }, theme)};
  `}
`
