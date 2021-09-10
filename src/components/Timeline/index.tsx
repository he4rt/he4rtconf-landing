import Title from 'components/Title'
import TimelineItem from 'components/TimelineItem'
import Tabs from 'components/Tabs'
import Tab from 'components/Tab'
import { SpeakersProps } from 'components/SpeakersSection'

import { Wrapper, ContentTimeline } from './styles'

export type ScheduleProps = {
  day: string
  talks: TalkProps[]
}

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
  talks: ScheduleProps[]
}

const Timeline = ({ talks }: TimelineProps) => (
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
        {talks.map((schedule) => (
          <Tab title={schedule.day} key={schedule.day}>
            {schedule.talks.map((talk) => (
              <TimelineItem
                key={`key-talks-first-day-${talk.id}`}
                speakerName={talk.speaker.name}
                {...talk}
              />
            ))}
          </Tab>
        ))}
      </Tabs>
    </ContentTimeline>
  </Wrapper>
)

export default Timeline
