import type { GetServerSideProps, NextPage } from 'next'
import { FaTwitch, FaDiscord } from 'react-icons/fa'

import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import Highlight from 'components/Highlight'
import Button from 'components/Button'

import { Card, WrapperButtons } from './styles'
import { AuthContext } from 'contexts/Auth'
import { useContext } from 'react'
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
  const { signIn } = useContext(AuthContext)
  return (
    <>
      <Header />
      <HeroSection title={<TitlePage />} subtitle={<SubTitlePage />} />
      <Card title="Participe da nossa gamificação." subtitle={<SubTitlePage />}>
        <WrapperButtons onClick={() => signIn()}>
          <Button>
            <FaTwitch size={24} /> Entrar com a Twitch
          </Button>
          <Button>
            <FaDiscord size={24} /> Entrar com Discord
          </Button>
        </WrapperButtons>
      </Card>
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
