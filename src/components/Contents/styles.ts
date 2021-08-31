import Title from 'components/Title'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  padding: 2.2rem 0;

  & > h3 {
    margin: 2.4rem 0;
  }

  &:not(:last-child):after {
    content: '';
    top: 0;
    right: -1.6rem;
    position: absolute;
    display: block;
    height: 100%;
    width: 2px;
    background: ${({ theme }) => theme.colors.border};
  }
`

export const ContentDetail = styled(Title)`
  margin: 2.4rem 0;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }
`
