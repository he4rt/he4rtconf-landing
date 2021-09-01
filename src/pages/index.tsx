import type { NextPage } from 'next'

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
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <ContentsSection />
      <PartnersSection />
      <FaqSection />
      <Footer />
    </>
  )
}

export default Home
