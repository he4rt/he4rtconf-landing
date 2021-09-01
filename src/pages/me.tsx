import type { NextPage } from 'next'
import { FaTwitch, FaDiscord } from 'react-icons/fa'

import Title from 'components/Title'
import Button from 'components/Button'

const Me: NextPage = () => {
  return (
    <>
      <Title level={1} color="white" fontWeight="normal" size="medium">
        Página sobre o usuário
      </Title>
      <Button>
        <FaTwitch size={24} />
        Entrar com a Twitch
      </Button>
      <Button>
        <FaDiscord size={24} />
        Entrar com o Discord
      </Button>
    </>
  )
}

export default Me
