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
  MobileWrapper,
  IconsMobile
} from './styles'

import logo from 'assets/logo.svg'
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa'

export type MobileHeaderProps = {
  isOpen: boolean
  setOpen: () => void
}

export type HeaderProps = {
  accessToken?: string
}

const MobileHeader = ({ isOpen, setOpen }: MobileHeaderProps) => {
  return (
    <WrapperMenu isOpen={isOpen}>
      <IoMdClose size={36} aria-label="Close Menu" onClick={setOpen} />
      <MenuNav>
        <Link href="#initial" onClick={setOpen}>
          Início
        </Link>
        <Link href="#about" onClick={setOpen}>
          O evento
        </Link>
        <Link href="#speakers" onClick={setOpen}>
          Palestrantes
        </Link>
        <Link href="#content" onClick={setOpen}>
          Conteúdos
        </Link>
        <Link href="#partners" onClick={setOpen}>
          Apoiadores
        </Link>
        <Link href="#faq" onClick={setOpen}>
          FAQ
        </Link>
        <IconsMobile>
          <Link href="https://twitter.com/He4rtDevs">
            <FaTwitter size={35} />
          </Link>
          <Link href="https://instagram.com/HeartDevs">
            <FaInstagram size={35} />
          </Link>
          <Link href="https://discord.gg/he4rt">
            <FaDiscord size={35} />
          </Link>
        </IconsMobile>
      </MenuNav>
    </WrapperMenu>
  )
}

const Header = ({ accessToken }: HeaderProps) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <WrapperHeader as="header" accessToken={accessToken}>
      <Logo width={260} height={56} src={logo} alt="Logo he4rt" />
      <WrapperLinks>
        {!accessToken ? (
          <>
            <Link href="#initial">Início</Link>
            <Link href="#about">O evento</Link>
            <Link href="#speakers">Palestrantes</Link>
            <Link href="#content">Conteúdos</Link>
            <Link href="#partners">Apoiadores</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="https://twitter.com/He4rtDevs" target="_blank">
              <FaTwitter size={25} />
            </Link>
            <Link href="https://instagram.com/HeartDevs" target="_blank">
              <FaInstagram size={25} />
            </Link>
            <Link href="https://discord.gg/he4rt" target="_blank">
              <FaDiscord size={25} />
            </Link>
          </>
        ) : null}
      </WrapperLinks>

      {!accessToken ? (
        <MobileWrapper>
          <AiOutlineMenu
            size={36}
            aria-label="Open Menu"
            onClick={() => setOpen(true)}
          />
        </MobileWrapper>
      ) : null}

      <MobileHeader isOpen={open} setOpen={() => setOpen((prev) => !prev)} />
    </WrapperHeader>
  )
}

export default Header
