import { AuthProvider } from 'contexts/Auth'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>He4rt Conference | 2021</title>
        <meta
          name="description"
          content="Muito mais que um evento, a He4rt Conf é uma iniciativa que visa democratizar e facilitar o acesso a conteúdos de alta qualidade produzidos pela comunidade, para a comunidade."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}
export default MyApp
