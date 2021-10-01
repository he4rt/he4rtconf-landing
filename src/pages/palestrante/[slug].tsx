import Footer from 'components/Footer'
import Header from 'components/Header'
import SpeakerHero from 'components/SpeakerHero'
import SpeakerListeners from 'components/SpeakerListeners'
import { GetServerSideProps } from 'next'
import { axiosClient } from 'services/axios'

const SpeakerSlug = ({ speaker }) => (
  <>
    <Header />
    <SpeakerHero speaker={speaker} />
    <SpeakerListeners speaker={speaker} />
    <Footer notice />
  </>
)

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const axios = axiosClient(ctx)
  const { slug } = ctx.params

  try {
    const { data } = await axios.get(`/speakers/${slug}?badges&talk`)

    return {
      props: {
        speaker: {
          ...data,
          badges: data.badges.sort(() => 0.5 - Math.random())
        }
      }
    }
  } catch (e) {
    console.log(e.response)
    return {
      notFound: true
    }
  }
}

export default SpeakerSlug
