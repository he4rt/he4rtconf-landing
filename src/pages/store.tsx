import Header from 'components/Header'
import Footer from 'components/Footer'
import Title from 'components/Title'
import ItemKit, { ItemKitProps } from 'components/ItemKit'

const items: ItemKitProps = {
  name: 'Kit 1 - Bordado',
  tag: 'Exclusivo',
  items: [
    '1 Camisa (100% Algodão - preta bordada)',
    '4 Bottons',
    '2 Chaveiros',
    '2 Adesivos'
  ],
  stock: 'Disponível',
  value: 70
}

const Store = () => (
  <>
    <Header />
    <Title fontWeight="semibold" color="white" size="huge" level={1}>
      Loja
    </Title>
    <ItemKit {...items} />
    <Footer notice />
  </>
)

export default Store
