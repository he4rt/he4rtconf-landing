import { Wrapper } from './styles'

import Title from 'components/Title'
import TimelineItem from 'components/TimelineItem'

const Timeline = () => (
  <Wrapper>
    <Title color="white" fontWeight="bold" size="medium" level={2}>
      Fique por dentro da programação do evento
    </Title>
    <Title color="gray" fontWeight="light" size="small" level={3}>
      Conteúdos e palestras sobre as mais modernas tecnologias, desde o
      back-end, até o front-end.
    </Title>
    <TimelineItem name="Abertura" schedule="17:30" tag="Finalizado" />
    <TimelineItem
      name="Como funciona o Client do League of Legends"
      schedule="16:30"
      speaker="Anna Campelo"
      tag="Ao vivo agora"
    />
    <TimelineItem
      name="Como o PHP vai morrer daqui X anos"
      schedule="19:00"
      tag="Em breve"
      speaker="Daniel Reis"
    />
  </Wrapper>
)

export default Timeline
