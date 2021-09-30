import Text from 'components/Text'
import Title from 'components/Title'
import Image from 'next/image'
import { Wrapper, ListenerImage, Listeners, ListenerInfo } from './styles'

const SpeakerListeners = ({ speaker }: any) => (
  <Wrapper>
    <ListenerInfo>
      <Title level={2} fontWeight="bold" size="medium" color="white">
        Ouvintes da Palestra
      </Title>
      <Text>Exibindo um total de {speaker.badges.length} ouvintes</Text>
    </ListenerInfo>
    <Listeners>
      {speaker.badges.length <= 0 ? (
        <Text style={{ width: '100%' }} center>
          Nenhum usuário encontrado
        </Text>
      ) : null}
      {speaker.badges
        .sort(() => 0.5 - Math.random())
        .map(({ image, id, name, github_username }: any) => (
          <ListenerImage
            href={`https://github.com/${github_username}`}
            rel="noopener noreferrer"
            target="_blank"
            key={id}
          >
            <Image
              src={image}
              alt={`Avatar de ${name}`}
              width="8rem"
              height="8rem"
              layout="responsive"
              objectFit="cover"
            />
          </ListenerImage>
        ))}
    </Listeners>
  </Wrapper>
)

export default SpeakerListeners
