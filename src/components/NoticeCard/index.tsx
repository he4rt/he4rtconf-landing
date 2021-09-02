import { ReactNode } from 'react'
import { WrapperNoticeCard, Content } from './styles'

import Title from 'components/Title'

type NoticeProps = {
  title: string | ReactNode
  subtitle: string | ReactNode
  children?: ReactNode
}

const NoticeCard = ({ title, subtitle, children }: NoticeProps) => (
  <WrapperNoticeCard>
    <Content as="div">
      <Title level={2} color="white" size="medium" fontWeight="bold">
        {title}
      </Title>
      <Title level={3} color="gray" size="small" fontWeight="light">
        {subtitle}
      </Title>
      {children}
    </Content>
  </WrapperNoticeCard>
)

export default NoticeCard
