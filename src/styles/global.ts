import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${({ theme }) => css`
      font-family: ${theme.font.family};
    `}

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
    color: #fff;
    background-color: #111;
    scroll-behavior: smooth;
  }

  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.background};
    `}
  }

  html, body, #__next {
    overflow-x: hidden;
  }

  #select {
    font-size: 2rem !important;
    margin-top: 1.8rem;
  }
}

`

export default GlobalStyles
