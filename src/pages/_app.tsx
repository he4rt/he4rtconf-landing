import type { AppProps } from 'next/app'
import Head from 'next/head'
import styled, { ThemeProvider, css } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import Countdown from 'react-countdown'
import Title from 'components/Title'

const Alert = styled.div`
  background: #ff3131;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 0;
  z-index: 999;
  ${({ theme }) => css`
    ${theme.breakpoints.greaterThan.md} {
      position: fixed;
    }
    ${theme.breakpoints.lessThan.xl} {
      h1 {
        font-size: ${theme.font.sizes.xxsmall};
      }
    }
  `}
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>He4rt Conference | 2021</title>
        <meta property="og:title" content="He4rt Conference | 2021" />
        <meta property="og:title" content="He4rt Conference | 2021" />
        <meta
          name="description"
          content="Muito mais que um evento, a He4rt Conf é uma iniciativa que visa democratizar e facilitar o acesso a conteúdos de alta qualidade produzidos pela comunidade, para a comunidade."
        />
        <meta
          property="twitter:description"
          content="Muito mais que um evento, a He4rt Conf é uma iniciativa que visa democratizar e facilitar o acesso a conteúdos de alta qualidade produzidos pela comunidade, para a comunidade."
        />
        <meta
          property="og:description"
          content="Muito mais que um evento, a He4rt Conf é uma iniciativa que visa democratizar e facilitar o acesso a conteúdos de alta qualidade produzidos pela comunidade, para a comunidade."
        />
        <meta name="theme-color" content="#782BF1" />
        <link rel="shortcut icon" href="/assets/hearticon.ico" />
        <link rel="apple-touch-icon" href="/assets/hearticon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
      </Head>
      <GlobalStyles />
      <Alert>
        <Title fontWeight="semibold" color="white" size="small" level={1}>
          Última chance! Nossa loja irá fechar em{' '}
          <Countdown
            renderer={({ hours, minutes, seconds }) => (
              <>
                {hours}h {minutes}m {seconds}s
              </>
            )}
            date={new Date('10/05/2021')}
          />{' '}
          com os produtos exclusivos da He4rtConf2021!
        </Title>
      </Alert>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
