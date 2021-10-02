import styled, { css } from 'styled-components'

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;

  > img {
    width: 20rem;
  }
`

export const Box = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    padding: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10rem;
  `}
`

export const SubItem = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 2rem;
  }

  > div {
    margin: 2rem 0;

    img {
      width: 6rem;
      margin-right: 1rem;
      margin-top: 1rem;
    }

    .mug {
      width: 10rem;
    }
  }
`

export const OthersProducts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
