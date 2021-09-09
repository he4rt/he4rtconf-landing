import Title from 'components/Title'
import TimelineItem from 'components/TimelineItem'
import Tabs from 'components/Tabs'
import Tab from 'components/Tab'
import { SpeakersProps } from 'components/SpeakersSection'

import { Wrapper, ContentTimeline } from './styles'

export type TalkProps = {
  id: number
  speaker_id: number
  title: string
  date: string
  created_at: string
  updated_at: string
  talk_date: string
  talk_hour: string
  status: 'Em breve' | 'Ao vivo agora' | 'Finalizado'
  speaker: SpeakersProps
}

type TimelineProps = {
  first: TalkProps[]
  second: TalkProps[]
  third: TalkProps[]
}

const Timeline = ({ first, second, third }: TimelineProps) => (
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
          {first.map((item) => (
            <TimelineItem
              key={`key-talks-first-day-${item.id}`}
              speakerName={item.speaker.name}
              {...item}
            />
          ))}
        </Tab>
        <Tab title="02/10/2021">
          {second.map((item) => (
            <TimelineItem
              key={`key-talks-second-day-${item.id}`}
              speakerName={item.speaker.name}
              {...item}
            />
          ))}
        </Tab>
        <Tab title="03/10/2021">
          {third.map((item) => (
            <TimelineItem
              key={`key-talks-third-day-${item.id}`}
              speakerName={item.speaker.name}
              {...item}
            />
          ))}
        </Tab>
      </Tabs>
    </ContentTimeline>
  </Wrapper>
)

export default Timeline
