import type { GetServerSideProps } from 'next'
import Head from 'next/head'

import Header from 'components/Header'
import Footer from 'components/Footer'
import HeroSection from 'components/HeroSection'
import AboutSection from 'components/AboutSection'
import SpeakersSection, { SpeakersProps } from 'components/SpeakersSection'
import PartnersSection, { PartnersProps } from 'components/PartnersSection'
import FaqSection from 'components/FaqSection'
import Timeline, { ScheduleProps } from 'components/Timeline'
import Highlight from 'components/Highlight'
import { axiosClient } from 'services/axios'

type HomeProps = {
  errorMessage?: string
  speakers: SpeakersProps[]
  partners: PartnersProps[]
  talks: ScheduleProps[]
  referral?: string
}

const Home = ({
  errorMessage,
  speakers,
  partners,
  talks,
  referral
}: HomeProps) => {
  return (
    <>
      <Head>
        {referral && (
          <>
            <meta
              property="og:image"
              content={`${process.env.NEXT_PUBLIC_SITE_URL}/api/ticket-image/${referral}`}
            />
            <meta
              property="twitter:image"
              content={`${process.env.NEXT_PUBLIC_SITE_URL}/api/ticket-image/${referral}`}
            />
          </>
        )}
      </Head>
      <Header />
      <HeroSection
        title="Participe do maior evento de tecnologia"
        subtitle={
          <>
            Um evento pensado para iniciantes, com palestras, desafios e muito
            mais! O evento ocorrerá nos dias{' '}
            <Highlight size="small" fontWeight="light">
              01
            </Highlight>
            ,{' '}
            <Highlight size="small" fontWeight="light">
              02
            </Highlight>{' '}
            e{' '}
            <Highlight size="small" fontWeight="light">
              03{' '}
            </Highlight>{' '}
            de{' '}
            <Highlight size="small" fontWeight="light">
              Outubro
            </Highlight>
            .
          </>
        }
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
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const axios = await axiosClient(ctx)
  const speakersRes = await axios.get('/speakers')
  const partnersRes = await axios.get('/sponsors')
  const talksRes = await axios.get('/talks')

  if (ctx.query.error) {
    return {
      props: {
        speakers: speakersRes.data.data,
        partners: partnersRes.data,
        talks: talksRes.data,
        errorMessage: ctx.query.error
      }
    }
  }

  if (ctx.query.referral) {
    return {
      props: {
        speakers: speakersRes.data.data,
        partners: partnersRes.data,
        talks: talksRes.data,
        referral: ctx.query.referral
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
