import Image from 'next/image'

import { Wrapper, FooterContent, Content, Contributors } from './styles'
import logo from 'assets/logo.svg'
import NoticeCard from 'components/NoticeCard'

const Footer = () => (
  <Wrapper>
    <NoticeCard />
    <FooterContent>
      <Content as="div">
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
