import styled, { css } from 'styled-components'

import Title from 'components/Title'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondBlack};

    &:after {
      background: ${theme.colors.purpleLightGradient};
    }
  `}

  background: #0a0a0a;
  padding: 5rem 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  &:after {
    position: absolute;
    display: block;
    content: '';
    bottom: -2px;
    width: 100%;
    height: 2px;
  }
`

export const Avatar = styled.div`
  width: 100%;
  height: 12.4rem;
  width: 12.4rem;
  position: relative;
  background: transparent;
  border-radius: 999px;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 999px;
  }
`

export const Name = styled(Title)`
  margin-top: 16px;
  margin-bottom: 6px;
  text-align: center;
  letter-spacing: -0.02em;
`

export const Stack = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
  `}

  text-align: center;
  letter-spacing: -0.02em;
`
