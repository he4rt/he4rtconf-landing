import Image from 'next/image'
import { WrapperHeader, Link, WrapperLinks } from './styles'

import logo from 'assets/logo.svg'

const Header = () => (
  <WrapperHeader as="header">
    <Image width={260} height={56} src={logo} alt="Logo he4rt" />
    <WrapperLinks>
      <Link>Início</Link>
      <Link>O evento</Link>
      <Link>Conteúdos</Link>
      <Link>Quem somos</Link>
      <Link>Apoiadores</Link>
      <Link>FAQ</Link>
    </WrapperLinks>
  </WrapperHeader>
)

export default Header
