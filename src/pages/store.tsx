import styled, { css } from 'styled-components'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Title from 'components/Title'
import Text from 'components/Text'
import ItemKit, { ItemKitProps } from 'components/ItemKit'
import Container from 'components/Container'
import { useForm } from 'react-hook-form'
import ModalStore from 'components/ModalStore'

const Warning = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.red};
  `}
`

const items: ItemKitProps[] = [
  {
    name: 'Kit 1 - Bordado',
    tag: 'Exclusivo',
    items: [
      '1 Camisa (100% Algodão com estampa bordada)',
      '4 Bottons',
      '2 Chaveiros',
      '2 Adesivos',
      '1 Caneca'
    ],
    stock: 'Disponível',
    value: 105,
    bottons: [
      '/assets/products/bottons/csharp.png',
      '/assets/products/bottons/java.png',
      '/assets/products/bottons/javascript.png',
      '/assets/products/bottons/php.png',
      '/assets/products/bottons/python.png',
      '/assets/products/bottons/react.png',
      '/assets/products/keychain/he4rt.png',
      '/assets/products/keychain/He4rtConf2021.png'
    ],
    keychains: [
      '/assets/products/keychain/he4rt.png',
      '/assets/products/keychain/He4rtConf2021.png'
    ],
    stickers: [
      '/assets/products/stickers/logo.png',
      '/assets/products/stickers/written-logo.png'
    ],
    mugs: [
      '/assets/products/mug/caneca-branca.png',
      '/assets/products/mug/caneca-logo.png',
      '/assets/products/mug/caneca-logo-written.png'
    ],
    tshirts: [
      '/assets/products/tshirt/one-heartlogo.png',
      '/assets/products/tshirt/four-hearts.png'
    ]
  },
  {
    name: 'Kit 2 - Serigrafia',
    tag: 'Exclusivo',
    items: [
      '1 Camisa (100% Algodão com estampa serigrafada)',
      '2 Bottons',
      '2 Adesivos',
      '1 Chaveiro',
      '1 Caneca'
    ],
    stock: 'Disponível',
    value: 90,
    bottons: [
      '/assets/products/bottons/csharp.png',
      '/assets/products/bottons/java.png',
      '/assets/products/bottons/javascript.png',
      '/assets/products/bottons/php.png',
      '/assets/products/bottons/python.png',
      '/assets/products/bottons/react.png',
      '/assets/products/keychain/he4rt.png',
      '/assets/products/keychain/He4rtConf2021.png'
    ],
    keychains: [
      '/assets/products/keychain/he4rt.png',
      '/assets/products/keychain/He4rtConf2021.png'
    ],
    stickers: [
      '/assets/products/stickers/logo.png',
      '/assets/products/stickers/written-logo.png'
    ],
    mugs: [
      '/assets/products/mug/caneca-branca.png',
      '/assets/products/mug/caneca-logo.png',
      '/assets/products/mug/caneca-logo-written.png'
    ],
    tshirts: [
      '/assets/products/tshirt/he4rtwritten.png',
      '/assets/products/tshirt/he4rtconf.png'
    ]
  }
]

const Store = () => {
  return (
    <>
      <Header />
      <Container>
        <Title
          fontWeight="semibold"
          color="white"
          size="huge"
          level={1}
          style={{ marginBottom: '3rem' }}
        >
          Loja
        </Title>
        <div
          style={{
            display: 'grid',
            'grid-template-columns': 'repeat(auto-fill, minmax(45rem, 2fr))',
            gap: '12.2rem',
            'justify-content': 'center'
          }}
        >
          {items.map((item) => (
            <ItemKit key={`item-kit-${item.name}`} {...item} />
          ))}
        </div>
        <hr style={{ color: '#181818', margin: '3.5rem 0' }} />
        <Warning>
          * Só é possível escolher as opções informadas na descrição.
        </Warning>
        <Warning>* O frete é definido apenas na etapa de compra.</Warning>
        <Warning>
          * A etapa final de compra será finalizada no Whatsapp.
        </Warning>
      </Container>
      <ModalStore isOpen item={items[0]}></ModalStore>

      <Footer notice />
    </>
  )
}

export default Store
