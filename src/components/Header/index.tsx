import { useState } from 'react'
import Image from 'next/image'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import {
  WrapperHeader,
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
    <AiOutlineClose aria-label="Close Menu" onClick={setOpen} />
    <MenuNav>
      <Link href="#">Início</Link>
      <Link href="#">O evento</Link>
      <Link href="#">Conteúdos</Link>
      <Link href="#">Quem somos</Link>
      <Link href="#">Apoiadores</Link>
      <Link href="#">FAQ</Link>
    </MenuNav>
  </WrapperMenu>
)

const Header = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <WrapperHeader as="header">
      <Image width={260} height={56} src={logo} alt="Logo he4rt" />
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

      <MobileHeader isOpen={open} setOpen={() => setOpen(false)} />
    </WrapperHeader>
  )
}

export default Header
