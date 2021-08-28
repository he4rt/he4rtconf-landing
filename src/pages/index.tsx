import type { NextPage } from 'next'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

import Button from 'components/Button'

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
      <h1>He4rt Conf</h1>
      <Button>Garantir vaga</Button>
    </>
  )
}

export default Home
