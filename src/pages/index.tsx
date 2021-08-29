import type { NextPage } from 'next'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import Button from 'components/Button'
import Title from 'components/Title'
import Text from 'components/Text'
import Header from 'components/Header'

const Home: NextPage = () => {
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
      </Head>
      <GlobalStyles />
      <Header />
      <Title color="white" fontWeight={700} level={2} size="small">
        Sobre o evento
      </Title>
      <Text>
        O evento será 100% gratuito e disponibilizara de forma pública todos os
        materiais produzidos para a conf através do Github e redes sociais da
        He4rt Developers.
      </Text>
      <Button>Garantir vaga</Button>
    </ThemeProvider>
  )
}

export default Home
