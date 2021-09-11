import type { GetServerSideProps, GetServerSidePropsContext } from 'next'

import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import Highlight from 'components/Highlight'
import ProfileCard from 'components/ProfileCard'
import Footer from 'components/Footer'
import Ticket from 'components/Ticket'

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
    <Ticket
      githubUsername={user.github_username}
      username={user.github_username}
      ticketNumber={user.id}
      userImg={user.image}
      style={{ margin: '100px auto' }}
    />

    <ProfileCard
      github_username={user.github_username}
      email={user.email}
      image={
        user.image ||
        'https://media.discordapp.net/attachments/547568121226068008/883410330116587540/Camada_1.png'
      }
      messages={user.messages}
      character={user.character}
      twitch_id={user.twitch_id}
      discord_id={user.discord_id}
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
    try {
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
    } catch (err: any) {
      // TODO: Arrumar type ^
      return {
        redirect: {
          destination: `/?error=${err.response.data.message}`,
          permanent: false
        }
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
