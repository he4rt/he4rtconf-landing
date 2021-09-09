import type { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import Header from 'components/Header'
import Footer from 'components/Footer'
import HeroSection from 'components/HeroSection'
import AboutSection from 'components/AboutSection'
import SpeakersSection, { SpeakersProps } from 'components/SpeakersSection'
import ContentsSection from 'components/ContentsSection'
import PartnersSection, { PartnersProps } from 'components/PartnersSection'
import FaqSection from 'components/FaqSection'
import Timeline, { TalkProps } from 'components/Timeline'
import { axiosClient } from 'services/axios'

type TalksResponse = Record<string, TalkProps[]>

type HomeProps = {
  errorMessage?: string
  speakers: SpeakersProps[]
  partners: PartnersProps[]
  talks: TalksResponse
}

const Home = ({ errorMessage, speakers, partners, talks }: HomeProps) => (
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
    <Timeline
      first={Object.values(talks)[0]}
      second={Object.values(talks)[2]}
      third={Object.values(talks)[1]}
    />
    <PartnersSection partners={partners} />
    <FaqSection />
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
