import { ReactNode } from 'react'
import { Background, PageWrapper } from './styles'

type TicketPageProps = {
  children: ReactNode
}

const TicketPage = ({ children }: TicketPageProps) => (
  <div>
    <Background>
      <PageWrapper>{children}</PageWrapper>
    </Background>
  </div>
)

export default TicketPage
