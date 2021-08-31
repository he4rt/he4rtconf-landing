import type { NextPage } from 'next'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import Header from 'components/Header'
import Footer from 'components/Footer'

import HeroSection from 'components/HeroSection'
import AboutSection from 'components/AboutSection'
import SpeakersSection from 'components/SpeakersSection'
import ContentsSection from 'components/ContentsSection'
import PartnersSection from 'components/PartnersSection'
import FaqSection from 'components/FaqSection'

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
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <ContentsSection />
      <PartnersSection />
      <FaqSection />
      <Footer />
    </ThemeProvider>
  )
}

export default Home
