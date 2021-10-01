import styled, { css } from 'styled-components'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Title from 'components/Title'
import Text from 'components/Text'
import ItemKit, { ItemKitProps } from 'components/ItemKit'

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
      '1 Camisa (100% Algodão - preta bordada)',
      '4 Bottons',
      '2 Chaveiros',
      '2 Adesivos'
    ],
    stock: 'Disponível',
    value: 70,
    bottons: [
      '/assets/products/bottons/csharp.png',
      '/assets/products/bottons/java.png',
      '/assets/products/bottons/javascript.png',
      '/assets/products/bottons/php.png',
      '/assets/products/bottons/python.png',
      '/assets/products/bottons/react.png'
    ],
    keychains: [
      '/assets/products/keychain/he4rt.jpg',
      '/assets/products/keychain/He4rtConf2021.jpg'
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
      '/assets/products/tshirt/he4rtconf.png',
      '/assets/products/tshirt/he4rtwritten.png'
    ]
  }
]

const Store = () => (
  <>
    <Header />
    <Title fontWeight="semibold" color="white" size="huge" level={1}>
      Loja
    </Title>
    <div>
      {items.map((item) => (
        <ItemKit key={`item-kit-${item.name}`} {...item} />
      ))}
    </div>
    <Warning>
      * Só é possível escolher as opções informadas na descrição.
    </Warning>
    <Warning>* O frete é definido apenas na etapa de compra.</Warning>
    <Footer notice />
  </>
)

export default Store
