import type { GetServerSideProps, NextPage } from 'next'
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
