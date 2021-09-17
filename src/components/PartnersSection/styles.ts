import styled, { css, DefaultTheme } from 'styled-components'

import Container from 'components/Container'
import { PartnersProps } from '.'

export const Wrapper = styled(Container)`
  padding-top: 15rem;
  padding-bottom: 15rem;
  h2 {
    margin-bottom: 6rem;
  }
`

export const PartnersList = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  justify-content: center;

  ${({ theme }) => css`
    ${theme.breakpoints.lessThan.md} {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  `};
`

const tagModifier = {
  1: (theme: DefaultTheme) => css`
    background: ${theme.colors.goldGradient};
  `,

  2: (theme: DefaultTheme) => css`
    background: ${theme.colors.grayGradient};
  `,

  3: (theme: DefaultTheme) => css`
    background: ${theme.colors.blueGradient};
  `,

  4: (theme: DefaultTheme) => css`
    background: ${theme.colors.purpleGradient};
  `
}

export const Tag = styled.p<Pick<PartnersProps, 'tier'>>`
  ${({ theme, tier }) => css`
    padding: 1.2rem 1.6rem;
    text-align: center;
    border-radius: 5rem;
    width: fit-content;

    font-weight: ${theme.font.weight.bold};
    text-transform: uppercase;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};

    ${!!tier && tagModifier[tier](theme)};
  `}
`

export const WrapperPartner = styled.div`
  display: flex;
  flex-direction: column;

  ${Tag} {
    margin-top: 6.4rem;
    margin-bottom: 3.2rem;
  }

  .wrapperItem {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const PartnerItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  ${({ theme, tier }) => css`
    ${theme.breakpoints.lessThan.md} {
      flex-direction: column;
    }
  `}
`
