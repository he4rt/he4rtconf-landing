import { ReactNode } from 'react'
import { WrapperNoticeCard, Content } from './styles'

import Title from 'components/Title'
import Button from 'components/Button'
import { AiFillGithub } from 'react-icons/ai'

type NoticeProps = {
  title: string | ReactNode
  subtitle: string | ReactNode
  children?: ReactNode
}

const NoticeCard = ({ title, subtitle, children, ...props }: NoticeProps) => (
  <WrapperNoticeCard {...props}>
    <Content as="div">
      <Title level={2} color="white" size="medium" fontWeight="bold">
        {title}
      </Title>
      <Title level={3} color="gray" size="small" fontWeight="light">
        {subtitle}
      </Title>
      <Button
        onClick={() =>
          (window.location.href = `${process.env.NEXT_PUBLIC_GITHUB_URL}`)
        }
      >
        <AiFillGithub size={24} />
        Garantir vaga com GitHub
      </Button>
      {children}
    </Content>
  </WrapperNoticeCard>
)

export default NoticeCard
