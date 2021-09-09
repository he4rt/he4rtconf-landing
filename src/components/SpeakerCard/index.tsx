import Image from 'next/image'

import { Wrapper, Avatar, Name, Stack, Description } from './styles'

export type SpeakerProps = {
  name: string
  stack: string
  description: string
  badge_path: string
  title: string
  slug: string
}

const SpeakerCard = ({
  badge_path,
  slug,
  name,
  title,
  ...props
}: SpeakerProps) => (
  <Wrapper {...props}>
    <Avatar>
      <Image
        src={
          'https://media.discordapp.net/attachments/547568121226068008/883410330116587540/Camada_1.png'
        }
        alt={`Avatar de ${name}`}
        layout="fill"
        objectFit="cover"
      />
    </Avatar>
    <Name level={3} color="white" fontWeight="light" size="small">
      Vitor Hugo Lima
    </Name>
    <Stack>{title}</Stack>
    {/*<Description>
      Front-End Developer há alguns anos, meio metido a designer e conhecido
      como o &quot;Chatão do ReScript&quot; por onde passa.
    </Description>*/}
  </Wrapper>
)

export default SpeakerCard
