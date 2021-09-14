import type { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import Header from 'components/Header'
import Footer from 'components/Footer'
import HeroSection from 'components/HeroSection'
import AboutSection from 'components/AboutSection'
import SpeakersSection, { SpeakersProps } from 'components/SpeakersSection'
import PartnersSection, { PartnersProps } from 'components/PartnersSection'
import FaqSection from 'components/FaqSection'
import Timeline, { ScheduleProps } from 'components/Timeline'
import { axiosClient } from 'services/axios'

type HomeProps = {
  errorMessage?: string
  speakers: SpeakersProps[]
  partners: PartnersProps[]
  talks: ScheduleProps[]
}

const Home = ({ errorMessage, speakers, partners, talks }: HomeProps) => (
  <>
    <Header />
    <HeroSection
      title="Participe do maior evento de tecnologia"
      subtitle="Um evento pensado para iniciantes, com palestras, desafios e muito mais!"
      haveButton
      errorMessage={errorMessage}
      id="initial"
    />
    <AboutSection id="about" />
    <SpeakersSection speakers={speakers} id="speakers" />
    {/*<ContentsSection />*/}
    <Timeline talks={talks} id="content" />
    <PartnersSection partners={partners} id="partners" />
    <FaqSection id="faq" />
    <Footer notice />
  </>
)

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { access_token } = parseCookies(ctx)
  const axios = await axiosClient(ctx)
  const speakersRes = await axios.get('/speakers')
  const partnersRes = await axios.get('/sponsors')
  const talksRes = await axios.get('/talks')

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
      partners: partnersRes.data,
      talks: talksRes.data
    }
  }
}

export default Home
