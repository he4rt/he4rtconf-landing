import { useState } from 'react'

import { AiOutlineMenu } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'

import {
  WrapperHeader,
  Logo,
  Link,
  WrapperLinks,
  WrapperMenu,
  MenuNav,
  MobileWrapper
} from './styles'

import logo from 'assets/logo.svg'

export type MobileHeaderProps = {
  isOpen: boolean
  setOpen: () => void
}

const MobileHeader = ({ isOpen, setOpen }: MobileHeaderProps) => (
  <WrapperMenu isOpen={isOpen}>
    <IoMdClose size={36} aria-label="Close Menu" onClick={setOpen} />
    <MenuNav>
      <Link href="#" onClick={setOpen}>
        Início
      </Link>
      <Link href="#" onClick={setOpen}>
        O evento
      </Link>
      <Link href="#" onClick={setOpen}>
        Conteúdos
      </Link>
      <Link href="#" onClick={setOpen}>
        Quem somos
      </Link>
      <Link href="#" onClick={setOpen}>
        Apoiadores
      </Link>
      <Link href="#" onClick={setOpen}>
        FAQ
      </Link>
    </MenuNav>
  </WrapperMenu>
)

const Header = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <WrapperHeader as="header">
      <Logo width={260} height={56} src={logo} alt="Logo he4rt" />
      <WrapperLinks>
        <Link href="#">Início</Link>
        <Link href="#">O evento</Link>
        <Link href="#">Conteúdos</Link>
        <Link href="#">Quem somos</Link>
        <Link href="#">Apoiadores</Link>
        <Link href="#">FAQ</Link>
      </WrapperLinks>

      <MobileWrapper>
        <AiOutlineMenu
          size={36}
          aria-label="Open Menu"
          onClick={() => setOpen(true)}
        />
      </MobileWrapper>

      <MobileHeader isOpen={open} setOpen={() => setOpen((prev) => !prev)} />
    </WrapperHeader>
  )
}

export default Header
