import Title from 'components/Title'

import { Wrapper, SpeakersList } from './styles'
import SpeakerCard from 'components/SpeakerCard'

const speakersTwo = [
  {
    name: 'Vitor Hugo Lima',
    stack: 'Front-end Developer no Ifood',
    description:
      'Front-End Developer há alguns anos, meio metido a designer e conhecido como o "Chatão do ReScript" por onde passa.',
    image:
      'https://cdn.discordapp.com/avatars/426540070028443688/9bdc585ce3df9ba9d2b6cb0866977876.webp'
  },
  {
    name: 'Vitor Hugo Lima',
    stack: 'Front-end Developer no Ifood',
    description:
      'Front-End Developer há alguns anos, meio metido a designer e conhecido como o "Chatão do ReScript" por onde passa.',
    image:
      'https://cdn.discordapp.com/avatars/426540070028443688/9bdc585ce3df9ba9d2b6cb0866977876.webp'
  },
  {
    name: 'Vitor Hugo Lima',
    stack: 'Front-end Developer no Ifood',
    description:
      'Front-End Developer há alguns anos, meio metido a designer e conhecido como o "Chatão do ReScript" por onde passa.',
    image:
      'https://cdn.discordapp.com/avatars/426540070028443688/9bdc585ce3df9ba9d2b6cb0866977876.webp'
  },
  {
    name: 'Vitor Hugo Lim1a',
    stack: 'Front-end Developer no Ifood',
    description:
      'Front-End Developer há alguns anos, meio metido a designer e conhecido como o "Chatão do ReScript" por onde passa.',
    image:
      'https://cdn.discordapp.com/avatars/426540070028443688/9bdc585ce3df9ba9d2b6cb0866977876.webp'
  }
]

const SpeakersSection = ({ speakers, ...props }) => (
  <Wrapper {...props}>
    <Title center color="white" fontWeight="bold" level={2} size="medium">
      Palestrantes do evento
    </Title>
    <SpeakersList>
      {speakers.map((speaker) => (
        <SpeakerCard key={speaker.id} {...speaker} />
      ))}
    </SpeakersList>
  </Wrapper>
)

export default SpeakersSection
