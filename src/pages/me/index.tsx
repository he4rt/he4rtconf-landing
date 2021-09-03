import type { GetServerSideProps, NextPage } from 'next'
import { FaTwitch, FaDiscord } from 'react-icons/fa'

import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import Highlight from 'components/Highlight'
import Button from 'components/Button'
import ProfileCard from 'components/ProfileCard'

import { Card, WrapperButtons } from './styles'
import { useAuth } from 'contexts/Auth'
import { parseCookies } from 'nookies'
import { axiosClient } from 'services/axios'
import Footer from 'components/Footer'

const TitlePage = () => (
  <>
    Parabéns. Sua vaga está garantida.{' '}
    <Highlight size="huge" fontWeight="semibold">
      :)
    </Highlight>
  </>
)

const SubTitlePage = () => (
  <>
    Continue indo além, participe da gamificação, basta apenas entrar com a{' '}
    <Highlight size="small" fontWeight="light">
      Twitch
    </Highlight>{' '}
    ou{' '}
    <Highlight size="small" fontWeight="light">
      Discord
    </Highlight>{' '}
    e você já está dentro.
  </>
)

const Me: NextPage = () => {
  const { signIn } = useAuth()

  return (
    <>
      <Header />
      <HeroSection title={<TitlePage />} subtitle={<SubTitlePage />} />
      <Card title="Participe da nossa gamificação." subtitle={<SubTitlePage />}>
        <WrapperButtons onClick={() => signIn}>
          <Button>
            <FaTwitch size={24} /> Entrar com a Twitch
          </Button>
          <Button>
            <FaDiscord size={24} /> Entrar com Discord
          </Button>
        </WrapperButtons>
      </Card>

      <ProfileCard
        github_username="NexTuRHe4rt"
        email="gabriel@gmail.com"
        image="https://cdn.discordapp.com/avatars/426540070028443688/9bdc585ce3df9ba9d2b6cb0866977876.webp"
        messages={{
          discord: 100,
          twitch: 100
        }}
        character={{
          id: 1,
          user_id: 1,
          level: 1,
          current_exp: 0,
          created_at: '2021-09-02T01:20:32.000000Z',
          updated_at: '02/09/2021',
          levelup_exp: {
            id: 1,
            required: 10,
            created_at: '10/04/2020',
            updated_at: '10/04/2020'
          },
          levelup_percentage: '0.00'
        }}
      />
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { access_token } = parseCookies(ctx)
  const axios = axiosClient(ctx)
  if (ctx.query?.code) {
    const { data } = await axios.get('auth/oauth/github', {
      params: { code: ctx.query?.code }
    })
    ctx.res.setHeader('set-cookie', [
      `access_token=${data.accessToken.accessToken}`
    ])
    return {
      redirect: {
        destination: '/me',
        permanent: false
      }
    }
  }
  if (!access_token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}

export default Me
