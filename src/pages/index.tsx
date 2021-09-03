import type { GetServerSideProps, NextPage } from 'next'
import { parseCookies } from 'nookies'

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
      <HeroSection
        title="Participe do maior evento de tecnologia"
        subtitle="Um evento pensado para iniciantes, com palestras, desafios e muito mais!"
        haveButton
      />
      <AboutSection />
      <SpeakersSection />
      <ContentsSection />
      <PartnersSection />
      <FaqSection />
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { access_token } = parseCookies(ctx)
  if (access_token) {
    return {
      redirect: {
        destination: '/me',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default Home
