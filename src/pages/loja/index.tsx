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
    {
      name: '1B',
      image: '/assets/products/tshirt/one-heartlogo.png'
    },
    {
      name: '2B',
      image: '/assets/products/tshirt/four-hearts.png'
    },
    {
      name: '1S',
      image: '/assets/products/tshirt/he4rtwritten.png'
    },
    {
      name: '2S',
      image: '/assets/products/tshirt/he4rtconf.png'
    }
  ],
  bottons: [
    {
      name: 'C#',
      image: '/assets/products/bottons/csharp.png'
    },
    {
      name: 'Java',
      image: '/assets/products/bottons/java.png'
    },
    {
      name: 'Javascript',
      image: '/assets/products/bottons/javascript.png'
    },
    {
      name: 'PHP',
      image: '/assets/products/bottons/php.png'
    },
    {
      name: 'Python',
      image: '/assets/products/bottons/python.png'
    },
    {
      name: 'React',
      image: '/assets/products/bottons/react.png'
    },
    {
      name: 'He4rt',
      image: '/assets/products/keychain/he4rt.png'
    },
    {
      name: 'He4rtConf',
      image: '/assets/products/keychain/He4rtConf2021.png'
    }
  ],
  keychains: [
    {
      name: 'He4rt',
      image: '/assets/products/keychain/he4rt.png'
    },
    {
      name: 'He4rtConf',
      image: '/assets/products/keychain/He4rtConf2021.png'
    }
  ],
  stickers: [
    {
      name: 'He4rt',
      image: '/assets/products/stickers/logo.png'
    },
    {
      name: 'He4rt Devs',
      image: '/assets/products/stickers/written-logo.png'
    }
  ],
  mugs: [
    {
      name: 'Caneca He4rt',
      image: '/assets/products/mug/caneca-1.png'
    },
    {
      name: 'Caneca Dev',
      image: '/assets/products/mug/caneca-2.png'
    }
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
    limits: {
      shirt: 1,
      bottons: 4,
      keychains: 2,
      stickers: 2,
      mugs: 1
    },
    stock: 'Disponível',
    value: 105,
    shirts: [0, 1],
    id: 0
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
    limits: {
      shirt: 1,
      bottons: 2,
      keychains: 1,
      stickers: 2,
      mugs: 1
    },
    stock: 'Disponível',
    value: 90,
    shirts: [2, 3],
    id: 1
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
        <Warning>* A etapa final de compra será realizada no Whatsapp.</Warning>
        <Warning>
          * Encomendas com início de fabricação ao fim da pré-venda.
        </Warning>
        <Warning>
          * Não temos nenhuma % de lucro nos pedidos, apenas custo de produção.
        </Warning>
      </Container>

      <Footer notice />
    </>
  )
}

export default Store
