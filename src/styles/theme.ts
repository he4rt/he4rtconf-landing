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
    purple: '#782BF1',
    white: '#F7F7F7',
    green: '#0CCA4A',
    purpleLightGradient:
      'linear-gradient(356.91deg, #782CF0 -7.12%, #996CDF 133.4%)',
    purpleDarkGradient:
      'linear-gradient(356.91deg, #3C157B -7.12%, #6E4EA0 133.4%)'
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
