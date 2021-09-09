import { WrapperTimeline, Content, Tag, Speaker } from './styles'

import Title from 'components/Title'
import { TalkProps } from 'components/Timeline'

type TimelineItemProps = {
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
      <Title level={3} color="gray" fontWeight="normal" size="small">
        {talk_hour}
      </Title>
      <Title level={3} color="white" fontWeight="light" size="small">
        {title}
      </Title>
      {speakerName !== null ? (
        <Speaker level={3} color="white" fontWeight="light" size="small">
          {speakerName}
        </Speaker>
      ) : null}
    </Content>
    <Tag tag={status}>{status}</Tag>
  </WrapperTimeline>
)

export default TimelineItem
