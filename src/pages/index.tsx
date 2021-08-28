import type { NextPage } from 'next'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

import Button from 'components/Button'
import Title from 'components/Title'
import Text from 'components/Text'

const Home: NextPage = () => {
  return (
    <>
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
      <Title color="dark" fontWeight={700} level={2} size="small">
        Sobre o evento
      </Title>
      <Text>
        O evento será 100% gratuito e disponibilizara de forma pública todos os
        materiais produzidos para a conf através do Github e redes sociais da
        He4rt Developers.
      </Text>
      <Button>Garantir vaga</Button>
    </>
  )
}

export default Home
