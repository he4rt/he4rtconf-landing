import type { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import Header from 'components/Header'
import Footer from 'components/Footer'
import HeroSection from 'components/HeroSection'
import AboutSection from 'components/AboutSection'
import SpeakersSection from 'components/SpeakersSection'
import ContentsSection from 'components/ContentsSection'
import PartnersSection from 'components/PartnersSection'
import FaqSection from 'components/FaqSection'
import { axiosClient } from 'services/axios'

type HomeProps = {
  errorMessage?: string
  speakers: any
  partners: any
}

const Home = ({ errorMessage, speakers, partners }: HomeProps) => {
  return (
    <>
      <Header />
      <HeroSection
        title="Participe do maior evento de tecnologia"
        subtitle="Um evento pensado para iniciantes, com palestras, desafios e muito mais!"
        haveButton
        errorMessage={errorMessage}
      />
      <AboutSection />
      <SpeakersSection speakers={speakers} />
      <ContentsSection />
      <PartnersSection partners={partners} />
      <FaqSection />
      <Footer notice />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { access_token } = parseCookies(ctx)
  const axios = await axiosClient(ctx)
  const speakersRes = await axios.get('/speakers')
  const partnersRes = await axios.get('/sponsors')
  if (access_token) {
    return {
      redirect: {
        destination: '/me',
        permanent: false
      }
    }
  }
  if (ctx.query.error) {
    return {
      props: {
        errorMessage: ctx.query.error
      }
    }
  }

  return {
    props: {
      speakers: speakersRes.data.data,
      partners: partnersRes.data
    }
  }
}

export default Home
