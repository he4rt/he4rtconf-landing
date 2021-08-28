import Image from 'next/image'

import { Wrapper, Avatar, Name, Stack, Description } from './styles'

type SpeakerProps = {
  name: string
  stack: string
  description: string
  image: string
}

const SpeakerCard = ({ image, name, ...props }: SpeakerProps) => (
  <Wrapper {...props}>
    <Avatar>
      <Image
        src={image}
        alt={`Avatar de ${name}`}
        layout="fill"
        objectFit="cover"
      />
    </Avatar>
    <Name>Vitor Hugo Lima</Name>
    <Stack>Front-end Developer no Ifood</Stack>
    <Description>
      Front-End Developer há alguns anos, meio metido a designer e conhecido
      como o "Chatão do ReScript" por onde passa.
    </Description>
  </Wrapper>
)

export default SpeakerCard
