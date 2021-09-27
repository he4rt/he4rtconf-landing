import styled from 'styled-components'
import { ProgressBarProps } from '.'

export const Wrapper = styled.span`
  display: block;
  width: 100%;
  border-radius: 8px;
`

export const Bar = styled.span<Pick<ProgressBarProps, 'percentage'>>`
  display: block;
  background-color: #462a72;
  width: 100%;
  height: 5px;
  &:after {
    display: block;
    content: '';
    background: #782bf1;
    width: ${({ percentage }) => `${percentage}%`};
    height: 100%;
  }
`

export const Status = styled.div`
  display: flex;
  justify-content: space-between;
`
