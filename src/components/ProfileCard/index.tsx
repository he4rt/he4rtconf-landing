import Image from 'next/image'
import { FaTwitch, FaDiscord } from 'react-icons/fa'

import Title from 'components/Title'
import Text from 'components/Text'

import { InfoProps } from 'services/provider'

import {
  WrapperProfile,
  ContentProfile,
  User,
  ImageBox,
  Gamification,
  GamificationText,
  RevokeLinks,
  DeleteAccount
} from './styles'

type ProfileCardProps = Pick<
  InfoProps,
  'email' | 'image' | 'github_username' | 'character' | 'messages'
>

const ProfileCard = ({
  email,
  image,
  github_username,
  character,
  messages
}: ProfileCardProps) => (
  <WrapperProfile>
    <ContentProfile>
      <User>
        <ImageBox>
          <Image
            src={image}
            alt={`Avatar de ${github_username}`}
            width="4rem"
            height="4rem"
            layout="responsive"
            objectFit="cover"
          />
        </ImageBox>

        <div>
          <Title level={5} color="white" fontWeight="bold" size="xsmall">
            {github_username}
          </Title>
          <Text>{email}</Text>
        </div>
      </User>

      <Gamification>
        <div>
          <Title level={5} color="white" fontWeight="bold" size="xsmall">
            Gamificação
          </Title>
          <Text>
            Última atualização -{' '}
            {new Date(character.updated_at).toLocaleString('pt-BR', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric'
            })}
          </Text>
        </div>

        <div>
          <GamificationText>
            <FaTwitch />
            {messages.twitch} mensagens
          </GamificationText>
          <GamificationText>
            <FaDiscord />
            {messages.discord} mensagens
          </GamificationText>
        </div>
      </Gamification>
    </ContentProfile>

    <RevokeLinks>
      <DeleteAccount>Deletar conta</DeleteAccount>
      <Text>Deslogar</Text>
    </RevokeLinks>
  </WrapperProfile>
)

export default ProfileCard
