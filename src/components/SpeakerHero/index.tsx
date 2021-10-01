import { verifySocialLink } from 'components/SpeakerCard'
import { WrapperIcons } from 'components/SpeakerCard/styles'
import Text from 'components/Text'
import Title from 'components/Title'
import Image from 'next/image'
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { Wrapper, AvatarImageBox, Description, Talk } from './styles'

const SpeakerHero = ({ speaker }: any) => (
  <Wrapper>
    <AvatarImageBox>
      <Image
        src={speaker.badge_path}
        alt={`Avatar de ${speaker.name}`}
        width="12rem"
        height="12rem"
        layout="responsive"
        objectFit="cover"
      />
    </AvatarImageBox>
    <Title level={1} fontWeight="bold" size="huge" color="white" center>
      {speaker.name}
    </Title>
    <Description center>{speaker.description}</Description>
    <Talk center>
      <strong>Palestra:</strong> {speaker.talk.title}
    </Talk>
    <Text>
      {speaker.talk.talk_date} {speaker.talk.talk_hour} - {speaker.talk.status}
    </Text>
    <WrapperIcons>
      {verifySocialLink(<FiTwitter />, speaker.twitter_url)}
      {verifySocialLink(<FiInstagram />, speaker.instagram_url)}
      {verifySocialLink(<FiLinkedin />, speaker.linkedin_url)}
      {verifySocialLink(<FiGithub />, speaker.github_url)}
    </WrapperIcons>
  </Wrapper>
)

export default SpeakerHero
