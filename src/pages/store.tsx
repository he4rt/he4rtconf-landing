import styled, { css } from 'styled-components'
import { useForm } from 'react-hook-form'
import ModalStore from 'components/ModalStore'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Title from 'components/Title'
import Text from 'components/Text'
import ItemKit, { ItemKitProps } from 'components/ItemKit'
import Products, { ProductProps } from 'components/Products'
import Container from 'components/Container'

const Warning = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.red};
  `}
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45rem, 2fr));
  gap: 12.2rem;
  justify-content: center;

  ${({ theme }) => css`
    ${theme.breakpoints.lessThan.md} {
      grid-template-columns: none;
    }
  `}
`

const TitleWithMargin = styled(Title)`
  margin-bottom: 3rem;
`

const Divider = styled.div`
  width: 100%;
  height: 0.2rem;
  margin: 3.5rem 0;
  background-color: ${({ theme }) => theme.colors.border};
`

const products: ProductProps = {
  shirts: [
    '/assets/products/tshirt/one-heartlogo.png',
    '/assets/products/tshirt/four-hearts.png',
    '/assets/products/tshirt/he4rtwritten.png',
    '/assets/products/tshirt/he4rtconf.png'
  ],
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
    '/assets/products/mug/caneca-1.png',
    '/assets/products/mug/caneca-2.png'
  ]
}

const items: ItemKitProps[] = [
  {
    name: 'Kit 1 - Bordado',
    tag: 'Peças exclusivas para o evento',
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
    shirts: [
      '/assets/products/tshirt/one-heartlogo.png',
      '/assets/products/tshirt/four-hearts.png'
    ]
  },
  {
    name: 'Kit 2 - Serigrafia',
    tag: 'Peças exclusivas para o evento',
    items: [
      '1 Camisa (100% Algodão com estampa serigrafada)',
      '2 Bottons',
      '1 Chaveiro',
      '2 Adesivos',
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
    shirts: [
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
        <TitleWithMargin
          fontWeight="semibold"
          color="white"
          size="huge"
          level={1}
        >
          Loja
        </TitleWithMargin>
        <Grid>
          {items.map((item) => (
            <ItemKit key={`item-kit-${item.name}`} {...item} />
          ))}
        </Grid>

        <Divider />

        <Container>
          <TitleWithMargin
            fontWeight="semibold"
            color="white"
            size="medium"
            level={2}
          >
            Produtos
          </TitleWithMargin>
          <Products {...products} />
        </Container>

        <Divider />

        <Warning>
          * Só é possível escolher as opções informadas na descrição.
        </Warning>
        <Warning>* O frete é definido apenas na etapa de compra.</Warning>
        <Warning>
          * A etapa final de compra será finalizada no Whatsapp.
        </Warning>
      </Container>

      {/* <ModalStore isOpen item={items[0]}></ModalStore> */}

      <Footer notice />
    </>
  )
}

export default Store
