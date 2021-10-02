const theme = {
  font: {
    family: 'DM Sans, sans-serif',
    weight: {
      light: 400,
      normal: 500,
      semibold: 600,
      bold: 700
    },
    sizes: {
      xxsmall: '1.4rem',
      xsmall: '1.6rem',
      small: '1.8rem',
      medium: '2.4rem',
      large: '3.6rem',
      huge: '5.2rem'
    }
  },
  colors: {
    background: '#020202',
    primary: '#0B0B0B',
    black: '#0D0D0D',
    secondBlack: '#0A0A0A',
    border: '#181818',
    gray: '#6d6b70',
    lightGray: '#7A787D',
    purple: '#782BF1',
    white: '#F7F7F7',
    green: '#0CCA4A',
    red: '#EF4444',
    purpleLightGradient:
      'linear-gradient(356.91deg, #782CF0 -7.12%, #996CDF 133.4%)',
    purpleDarkGradient:
      'linear-gradient(356.91deg, #3C157B -7.12%, #6E4EA0 133.4%)',
    goldGradient:
      'linear-gradient(90deg, #FFC737 0%, rgba(255, 199, 55, 0) 220.96%)',
    grayGradient:
      'linear-gradient(90deg, #464646 0%, #272727 126.92%, #121212 126.92%)',
    blueGradient: 'linear-gradient(90deg, #10ACEE 0%, #010C10 193.71%)',
    purpleGradient: 'linear-gradient(90deg, #5214D5 0%, #010C10 193.71%)',
    whiteGradient: 'linear-gradient(90deg, #FCFCFC 0%, #010C10 193.71%)'
  },
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1120px'
  },
  breakpoints: {
    lessThan: {
      sm: '@media (max-width: 640px)',
      md: '@media (max-width: 768px)',
      lg: '@media (max-width: 1024px)',
      xl: '@media (max-width: 1120px)'
    },
    greaterThan: {
      sm: '@media (min-width: 640px)',
      md: '@media (min-width: 768px)',
      lg: '@media (min-width: 1024px)',
      xl: '@media (min-width: 1120px)'
    }
  }
}

export default theme
