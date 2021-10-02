import Image from 'next/image'
import Link from 'next/link'
import { FiTwitter, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi'

import { Wrapper, Avatar, Name, Stack, WrapperIcons, Button } from './styles'

import { SpeakersProps } from 'components/SpeakersSection'
import { BsArrowRight } from 'react-icons/bs'
import { ReactNode } from 'react'

type SpeakerCardProps = Pick<
  SpeakersProps,
  | 'name'
  | 'badge_path'
  | 'title'
  | 'twitter_url'
  | 'instagram_url'
  | 'linkedin_url'
  | 'github_url'
  | 'active'
  | 'slug'
>

export const verifySocialLink = (icon: ReactNode, link: string | null) => {
  if (!link) {
    return null
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  )
}

const SpeakerCard = ({
  name,
  badge_path,
  title,
  twitter_url,
  instagram_url,
  linkedin_url,
  github_url,
  active,
  slug,
  ...props
}: SpeakerCardProps) => (
  <Wrapper {...props}>
    <Avatar>
      <Image
        src={
          !active
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
    {active ? (
      <WrapperIcons>
        {verifySocialLink(<FiTwitter />, twitter_url)}
        {verifySocialLink(<FiInstagram />, instagram_url)}
        {verifySocialLink(<FiLinkedin />, linkedin_url)}
        {verifySocialLink(<FiGithub />, github_url)}
      </WrapperIcons>
    ) : null}
    <Link
      href={
        !slug.includes('marcos-oliveira')
          ? `/palestrante/${slug}`
          : '/palestrante/fakenickels'
      }
      passHref
    >
      <Button>
        Ver palestrante <BsArrowRight size={24} />
      </Button>
    </Link>

    {/*<Description>
      Front-End Developer há alguns anos, meio metido a designer e conhecido
      como o &quot;Chatão do ReScript&quot; por onde passa.
    </Description>*/}
  </Wrapper>
)

export default SpeakerCard
