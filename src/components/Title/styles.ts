import styled, { css } from 'styled-components'

import { TitleProps } from '.'

const wrapperTitleModifiers = {
  small: () => css`
    font-size: 2.4rem;
  `,

  medium: () => css`
    font-size: 3.6rem;
  `,

  huge: () => css`
    font-size: 5.2rem;
  `
}

export const WrapperTitle = styled.h1.attrs<TitleProps>(({ level }) => ({
  as: `h${level}`
}))<TitleProps>`
  ${({ fontWeight, size, color }) => css`
    font-weight: ${fontWeight};
    /* TODO mudar a verificação quando tiver o theme para passar somente as cores */
    color: ${color === 'light' ? '#F7F7F7' : '#6D6B70'};
    letter-spacing: -0.02em;

    ${!!size && wrapperTitleModifiers[size]}
  `}
`
