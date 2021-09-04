import Image from 'next/image'

import { Wrapper, FooterContent, Content, Contributors } from './styles'
import logo from 'assets/logo.svg'
import NoticeCard from 'components/NoticeCard'

export type FooterProps = {
  notice?: boolean
}

const Footer = ({ notice, ...props }: FooterProps) => (
  <Wrapper notice={notice} {...props}>
    {notice ? (
      <NoticeCard
        title="Fique por dentro de tudo"
        subtitle="Esse evento será ao vivo e ocorrerá nos dias 1, 2 e 3 de Outubro. Então
        aproveite e inscreva-se para ficar por dentro de tudo em primeira mão!
        Nós enviaremos as últimas informações sobre o evento."
      />
    ) : null}
    <FooterContent>
      <Content notice={notice} as="div">
        <Image width={260} height={56} src={logo} alt="Logo he4rt" />
        <Contributors>
          Desenvolvido por <a href="https://github.com/kjkGustavo">Gustavo</a> e{' '}
          <a href="https://github.com/m7he4rt">m7he4rt</a> com design de{' '}
          <a href="https://dribbble.com/rebeccagonzalez">Rebecca Gonzalez</a>
        </Contributors>
      </Content>
    </FooterContent>
  </Wrapper>
)

export default Footer
