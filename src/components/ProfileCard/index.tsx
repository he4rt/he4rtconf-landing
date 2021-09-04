import Image from 'next/image'
import { FaTwitch, FaDiscord } from 'react-icons/fa'

import Title from 'components/Title'
import Text from 'components/Text'

import { InfoProps } from 'common/User'

import {
  WrapperProfile,
  ContentProfile,
  User,
  ImageBox,
  Gamification,
  GamificationText,
  RevokeLinks,
  DeleteAccount,
  GamificationWrapperText,
  ButtonLink
} from './styles'
import Router from 'next/router'
import Container from 'components/Container'

type ProfileCardProps = Pick<
  InfoProps,
  | 'email'
  | 'image'
  | 'github_username'
  | 'character'
  | 'messages'
  | 'twitch_id'
  | 'discord_id'
>

const ProfileCard = ({
  email,
  image,
  github_username,
  character,
  messages,
  twitch_id,
  discord_id
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
          <GamificationWrapperText>
            {twitch_id === null ? (
              <>
                <GamificationText>
                  <FaTwitch /> Desconectado
                </GamificationText>
                <ButtonLink
                  onClick={() =>
                    (window.location.href = `${process.env.NEXT_PUBLIC_TWITCH_URL}`)
                  }
                >
                  <FaTwitch /> Entre com Twitch
                </ButtonLink>
              </>
            ) : (
              <>
                <GamificationText>
                  <FaTwitch />
                  {messages.twitch} mensagens
                </GamificationText>
                <ButtonLink
                  onClick={() => Router.push('/me/delete?provider=twitch')}
                >
                  Desconectar
                </ButtonLink>
              </>
            )}
          </GamificationWrapperText>

          <GamificationWrapperText>
            {discord_id === null ? (
              <>
                <GamificationText>
                  <FaDiscord /> Desconectado
                </GamificationText>
                <ButtonLink
                  onClick={() =>
                    (window.location.href = `${process.env.NEXT_PUBLIC_DISCORD_URL}`)
                  }
                >
                  <FaDiscord /> Entre com Discord
                </ButtonLink>
              </>
            ) : (
              <>
                <GamificationText>
                  <FaDiscord />
                  {messages.discord} mensagens
                </GamificationText>
                <ButtonLink
                  onClick={() => Router.push('/me/delete?provider=discord')}
                >
                  Desconectar
                </ButtonLink>
              </>
            )}
          </GamificationWrapperText>
        </div>
      </Gamification>
    </ContentProfile>
    <Container>
      <RevokeLinks>
        <Text onClick={() => Router.push('/me/logout')}>Deslogar</Text>
        <DeleteAccount onClick={() => Router.push('/me/delete')}>
          Deletar conta
        </DeleteAccount>
      </RevokeLinks>
    </Container>
  </WrapperProfile>
)

export default ProfileCard
