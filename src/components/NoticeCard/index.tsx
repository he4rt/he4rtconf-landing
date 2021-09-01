import { WrapperNoticeCard, Form } from './styles'

import Title from 'components/Title'
import Button from 'components/Button'
import Container from 'components/Container'

const NoticeCard = () => (
  <WrapperNoticeCard>
    <Container as="div">
      <Title level={2} color="white" size="medium" fontWeight="bold">
        Fique por dentro de tudo
      </Title>
      <Title level={3} color="gray" size="small" fontWeight="light">
        Esse evento será ao vivo e ocorrerá nos dias 1, 2 e 3 de Outubro. Então
        aproveite e inscreva-se para ficar por dentro de tudo em primeira mão!
        Nós enviaremos as últimas informações sobre o evento.
      </Title>

      <Form>
        <Button>Entrar</Button>
      </Form>
    </Container>
  </WrapperNoticeCard>
)

export default NoticeCard
