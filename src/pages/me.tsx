import type { NextPage } from 'next'
import { FaTwitch, FaDiscord } from 'react-icons/fa'

import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import Highlight from 'components/Highlight'
import NoticeCard from 'components/NoticeCard'
import Button from 'components/Button'

const Me: NextPage = () => {
  return (
    <>
      <Header />
      <HeroSection
        title={
          <>
            Parabéns. Sua vaga está garantida.{' '}
            <Highlight size="huge" fontWeight="semibold">
              :)
            </Highlight>
          </>
        }
        subtitle={
          <>
            Continue indo além, participe da gamificação, basta apenas entrar
            com o{' '}
            <Highlight size="small" fontWeight="light">
              Twitter
            </Highlight>{' '}
            ou{' '}
            <Highlight size="small" fontWeight="light">
              Discord
            </Highlight>{' '}
            e você já está dentro.
          </>
        }
      />
      <NoticeCard
        title="Participe da nossa gamificação."
        subtitle={
          <>
            Continue indo além, participe da gamificação, basta apenas entrar
            com o{' '}
            <Highlight size="small" fontWeight="light">
              Twitter
            </Highlight>{' '}
            ou{' '}
            <Highlight size="small" fontWeight="light">
              Discord
            </Highlight>{' '}
            e você já está dentro.
          </>
        }
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button>
            <FaTwitch size={24} /> Entrar com Twitter
          </Button>
          <Button>
            <FaDiscord size={24} /> Entrar com Discord
          </Button>
        </div>
      </NoticeCard>
    </>
  )
}

export default Me
