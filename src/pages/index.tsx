import type { NextPage } from 'next'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

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
      </Head>
      <GlobalStyles />
      <h1>He4rt Conf</h1>
    </>
  )
}

export default Home
