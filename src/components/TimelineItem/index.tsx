import { WrapperTimeline, Content, Tag } from './styles'

import Title from 'components/Title'
import { TalkProps } from 'components/Timeline'

export type TimelineItemProps = {
  speakerName: string
} & Pick<TalkProps, 'title' | 'status' | 'talk_hour'>

const TimelineItem = ({
  title,
  status,
  talk_hour,
  speakerName
}: TimelineItemProps) => (
  <WrapperTimeline>
    <Content>
      <Title
        className="talkHour"
        level={3}
        color="gray"
        fontWeight="normal"
        size="xsmall"
      >
        {talk_hour}
      </Title>
      <Title level={3} color="white" fontWeight="light" size="small">
        {title}
      </Title>
      {speakerName !== null ? (
        <Title
          className="speaker"
          level={3}
          color="gray"
          fontWeight="light"
          size="xsmall"
        >
          {speakerName.includes('Helen Dias')
            ? 'Danny Farias, Helen Dias, Felipe Fialho, Daiune Fujii, Alexandre Xavier, Leila Almeida'
            : speakerName}
        </Title>
      ) : null}
    </Content>
    <Tag status={status}>{status}</Tag>
  </WrapperTimeline>
)

export default TimelineItem
