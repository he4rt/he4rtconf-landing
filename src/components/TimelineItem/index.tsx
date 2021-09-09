import { WrapperTimeline, Content, Tag, Speaker } from './styles'

import Title from 'components/Title'

export type TimelineItemProps = {
  schedule: string
  name: string
  speaker?: string
  tag: 'Em breve' | 'Ao vivo agora' | 'Finalizado'
}

const TimelineItem = ({ name, schedule, tag, speaker }: TimelineItemProps) => (
  <WrapperTimeline>
    <Content>
      <Title level={3} color="gray" fontWeight="normal" size="small">
        {schedule}
      </Title>
      <Title level={3} color="white" fontWeight="light" size="small">
        {name}
      </Title>
      {speaker !== null ? (
        <Speaker level={3} color="white" fontWeight="light" size="small">
          {speaker}
        </Speaker>
      ) : null}
    </Content>
    <Tag tag={tag}>{tag}</Tag>
  </WrapperTimeline>
)

export default TimelineItem
