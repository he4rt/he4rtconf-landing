import Title from 'components/Title'
import TimelineItem from 'components/TimelineItem'
import Tabs from 'components/Tabs'
import Tab from 'components/Tab'

import { Wrapper, ContentTimeline } from './styles'

const Timeline = () => (
  <Wrapper>
    <Title color="white" fontWeight="bold" size="medium" level={2}>
      Fique por dentro da programação do evento
    </Title>
    <Title color="gray" fontWeight="light" size="small" level={3}>
      Conteúdos e palestras sobre as mais modernas tecnologias, desde o
      back-end, até o front-end.
    </Title>

    <ContentTimeline>
      <Tabs>
        <Tab title="01/10/2021">
          <TimelineItem name="Abertura" schedule="17:30" tag="Finalizado" />
          <TimelineItem
            name="Palestra"
            schedule="16:30"
            speaker="Palestrante X"
            tag="Ao vivo agora"
          />
          <TimelineItem
            name="Como o PHP vai morrer daqui X anos"
            schedule="19:00"
            tag="Em breve"
            speaker="Palestrante Y"
          />
        </Tab>
        <Tab title="02/10/2021">
          <TimelineItem
            name="Palestra"
            schedule="16:30"
            speaker="Palestrante Z"
            tag="Ao vivo agora"
          />
          <TimelineItem
            name="Palestra"
            schedule="19:00"
            tag="Em breve"
            speaker="Palestrante E"
          />
        </Tab>
        <Tab title="03/10/2021">
          <TimelineItem name="Fechamento" schedule="19:00" tag="Em breve" />
        </Tab>
      </Tabs>
    </ContentTimeline>
  </Wrapper>
)

export default Timeline