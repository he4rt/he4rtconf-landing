import type { NextPage } from 'next'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import Button from 'components/Button'
import Title from 'components/Title'
import Text from 'components/Text'
import Header from 'components/Header'
import NoticeCard from 'components/NoticeCard'
import Container from 'components/Container'
import SpeakerCard from 'components/SpeakerCard'
import PartnerCard from 'components/PartnerCard'
import FaqItem from 'components/FaqItem'
import FaqList from 'components/FaqList'
import Contents from 'components/Contents'

const speakerProps = {
  name: 'Vitor Hugo Lima',
  stack: 'Front-end Developer no Ifood',
  description:
    'Front-End Developer há alguns anos, meio metido a designer e conhecido como o "Chatão do ReScript" por onde passa.',
  image:
    'https://cdn.discordapp.com/avatars/426540070028443688/9bdc585ce3df9ba9d2b6cb0866977876.webp'
}

const partnerProps = {
  image:
    'https://cdn.discordapp.com/avatars/426540070028443688/9bdc585ce3df9ba9d2b6cb0866977876.webp'
}

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>He4rt Conference | 2021</title>
        <meta
          name="description"
          content="Muito mais que um evento, a He4rt Conf é uma iniciativa que visa democratizar e facilitar o acesso a conteúdos de alta qualidade produzidos pela comunidade, para a comunidade."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Header />
      <Container style={{ paddingTop: '15rem', paddingBottom: '15rem' }}>
        <Title color="white" fontWeight={700} level={2} size="medium">
          Sobre o evento
        </Title>
        <Text>
          O evento será 100% gratuito e disponibilizara de forma pública todos
          os materiais produzidos para a conf através do Github e redes sociais
          da He4rt Developers.
        </Text>
        <Text>
          O evento será 100% gratuito e disponibilizara de forma pública todos
          os materiais produzidos para a conf através do Github e redes sociais
          da He4rt Developers.
        </Text>
        <Text>
          Muito mais que um evento, a He4rt Conf é uma iniciativa que visa
          democratizar e facilitar o acesso a conteúdos de alta qualidade
          produzidos pela comunidade, para a comunidade.
        </Text>
      </Container>
      <Container style={{ paddingTop: '15rem', paddingBottom: '15rem' }}>
        <Title
          center
          color="white"
          fontWeight={700}
          level={2}
          size="medium"
          style={{ marginBottom: '6rem' }}
        >
          Palestrantes do evento
        </Title>
        <div
          style={{
            display: 'grid',
            'grid-template-columns': 'repeat(auto-fill, minmax(35rem, 2fr))',
            gap: '3.2rem'
          }}
        >
          <SpeakerCard {...speakerProps} />
          <SpeakerCard {...speakerProps} />
          <SpeakerCard {...speakerProps} />
        </div>
      </Container>
      <Container style={{ paddingTop: '15rem', paddingBottom: '15rem' }}>
        <Title
          center
          color="white"
          fontWeight={700}
          level={2}
          size="medium"
          style={{ marginBottom: '1.6rem' }}
        >
          Diversidade de conteúdos e tecnologias
        </Title>
        <Title
          center
          color="gray"
          fontWeight={400}
          level={3}
          size="small"
          style={{ maxWidth: '67rem', margin: '0 auto', marginBottom: '8rem' }}
        >
          Conteúdos e palestras sobre as mais modernas tecnologias, desde o
          back-end, até o front-end.
        </Title>
        <div
          style={{
            display: 'grid',
            'grid-template-columns': 'repeat(auto-fill, minmax(25rem, 2fr))',
            gap: '3.2rem'
          }}
        >
          <Contents contents={['Java', 'React']} />
          <Contents contents={['Java', 'React']} />
          <Contents contents={['Java', 'React', 'PHP']} />
          <Contents contents={['Java', 'React']} />
        </div>
      </Container>
      <Container style={{ paddingTop: '15rem', paddingBottom: '15rem' }}>
        <Title
          center
          color="white"
          fontWeight={700}
          level={2}
          size="medium"
          style={{ marginBottom: '6rem' }}
        >
          Nossos patrocinadores
        </Title>
        <div
          style={{
            display: 'grid',
            'grid-template-columns': 'repeat(auto-fill, minmax(25rem, 2fr))',
            gap: '3.2rem'
          }}
        >
          <PartnerCard {...partnerProps} />
          <PartnerCard {...partnerProps} />
          <PartnerCard {...partnerProps} />
          <PartnerCard {...partnerProps} />
        </div>
      </Container>
      <Container style={{ paddingTop: '15rem', paddingBottom: '15rem' }}>
        <Title color="white" fontWeight={700} level={2} size="medium">
          FAQ
        </Title>
        <FaqList />
      </Container>
      <Button>Garantir vaga</Button>
      <NoticeCard />
    </ThemeProvider>
  )
}

export default Home
