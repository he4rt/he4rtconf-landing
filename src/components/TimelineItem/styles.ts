import styled, { css, DefaultTheme } from 'styled-components'

import Text from 'components/Text'
import { TimelineItemProps } from '.'

export const WrapperTimeline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6rem;
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.border};
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ theme }) => css`
    .talkHour {
      color: ${theme.colors.purple};
    }
  `}

  h3 {
    margin-bottom: 0.3rem;
  }

  .speaker {
    margin-bottom: 2rem;
  }
`

const tagModifiers = (
  { status }: Pick<TimelineItemProps, 'status'>,
  theme: DefaultTheme
) => {
  if (status === 'Ao vivo agora') {
    return theme.colors.red
  }

  if (status === 'Em breve') {
    return theme.colors.green
  }

  return theme.colors.gray
}

export const Tag = styled(Text)<Pick<TimelineItemProps, 'status'>>`
  ${({ theme, status }) => css`
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.sizes.xsmall};
    padding: 0.3rem 0.7rem;
    border-radius: 0.6rem;
    text-transform: uppercase;

    color: ${theme.colors.white};
    background-color: ${tagModifiers({ status }, theme)};
  `}
`
