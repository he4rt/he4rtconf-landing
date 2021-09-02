import type { NextPage } from 'next'
import { FaTwitch, FaDiscord } from 'react-icons/fa'

import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import Highlight from 'components/Highlight'
import Button from 'components/Button'

import { Card, WrapperButtons } from './styles'

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

const Me: NextPage = () => (
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
  </>
)

export default Me
