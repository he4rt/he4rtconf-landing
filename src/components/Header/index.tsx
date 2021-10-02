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
import { AiFillStar } from 'react-icons/ai'

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
        <Link href="/#initial" onClick={setOpen} passHref>
          Início
        </Link>
        <Link href="/#about" onClick={setOpen} passHref>
          O evento
        </Link>
        <Link href="/#speakers" onClick={setOpen} passHref>
          Palestrantes
        </Link>
        <Link href="/#content" onClick={setOpen} passHref>
          Conteúdos
        </Link>
        <Link href="/#partners" onClick={setOpen} passHref>
          Apoiadores
        </Link>
        <Link href="/#faq" onClick={setOpen} passHref>
          FAQ
        </Link>
        <Link href="/loja" onClick={setOpen} passHref>
          Loja <AiFillStar size={35} />
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
    <WrapperHeader as="header">
      <Link href="/" passHref>
        <Logo width={260} height={56} src={logo} alt="Logo he4rt" />
      </Link>
      <WrapperLinks>
        <>
          <Link href="/#initial" passHref>
            Início
          </Link>
          <Link href="/#about" passHref>
            O evento
          </Link>
          <Link href="/#speakers" passHref>
            Palestrantes
          </Link>
          <Link href="/#content" passHref>
            Conteúdos
          </Link>
          <Link href="/#partners" passHref>
            Apoiadores
          </Link>
          <Link href="/#faq" passHref>
            FAQ
          </Link>
          <Link
            href="/loja"
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              color: '#FBBF24'
            }}
            onClick={setOpen}
            passHref
          >
            Loja <AiFillStar size={25} />
          </Link>
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
