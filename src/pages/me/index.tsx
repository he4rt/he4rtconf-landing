import type { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { FaTwitch, FaDiscord } from 'react-icons/fa'

import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import Highlight from 'components/Highlight'
import Button from 'components/Button'
import ProfileCard from 'components/ProfileCard'
import Footer from 'components/Footer'

import { Card, WrapperButtons } from './styles'
import { parseCookies } from 'nookies'
import { axiosClient } from 'services/axios'
import { InfoProps } from 'common/User'

type MeProps = {
  user: InfoProps
}

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

const Me = ({ user }: MeProps) => (
  <>
    <Header />
    <HeroSection title={<TitlePage />} subtitle={<SubTitlePage />} />
    <Card title="Participe da nossa gamificação." subtitle={<SubTitlePage />}>
      <WrapperButtons>
        <Button>
          <FaTwitch size={24} /> Entrar com a Twitch
        </Button>
        <Button>
          <FaDiscord size={24} /> Entrar com Discord
        </Button>
      </WrapperButtons>
    </Card>

    <ProfileCard
      github_username={user.github_username}
      email={user.email}
      image={
        user.image ||
        'https://cdn.discordapp.com/avatars/426540070028443688/9bdc585ce3df9ba9d2b6cb0866977876.webp'
      }
      messages={user.messages}
      character={user.character}
    />
    <Footer />
  </>
)

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
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

  try {
    const response = await axios.get('users/me')

    return {
      props: {
        user: response.data
      }
    }
  } catch (e) {
    console.log('error', e)
  }

  return {
    props: {}
  }
}

export default Me
