import type { GetServerSideProps, NextPage } from 'next'
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
import Router from 'next/router'

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
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

export const getServerSideProps: GetServerSideProps = async (data) => {
  console.log(data)
  return {
    redirect: {
      destination: '/profile',
      permanent: false
    }
  }
}

export default Home
