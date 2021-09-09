import Image from 'next/image'

import { Wrapper, Avatar, Name, Stack } from './styles'

import { SpeakersProps } from 'components/SpeakersSection'

type SpeakerCardProps = Pick<
  SpeakersProps,
  'name' | 'badge_path' | 'title' | 'slug'
>

const SpeakerCard = ({
  name,
  badge_path,
  slug,
  title,
  ...props
}: SpeakerCardProps) => (
  <Wrapper {...props}>
    <Avatar>
      <Image
        src={
          slug === 'em-breve'
            ? 'https://media.discordapp.net/attachments/547568121226068008/883410330116587540/Camada_1.png'
            : badge_path
        }
        alt={`Avatar de ${name}`}
        layout="fill"
        objectFit="cover"
      />
    </Avatar>
    <Name level={3} color="white" fontWeight="light" size="small">
      {name}
    </Name>
    <Stack>{title}</Stack>
    {/*<Description>
      Front-End Developer há alguns anos, meio metido a designer e conhecido
      como o &quot;Chatão do ReScript&quot; por onde passa.
    </Description>*/}
  </Wrapper>
)

export default SpeakerCard
