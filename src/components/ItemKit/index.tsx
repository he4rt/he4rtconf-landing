import { AiOutlineShoppingCart } from 'react-icons/ai'

import Title from 'components/Title'
import Text from 'components/Text'

import { Tag, Stock, ItemsWrapper, ValueWrapper, IconWrapper } from './styles'

export type ItemKitProps = {
  name: string
  tag: string
  items: string[]
  value: number
  stock: string
  shirts: number[]
  limits: {
    shirt: number
    bottons: number
    keychains: number
    stickers: number
    mugs: number
  }
  id: number
}

const ItemKit = ({
  name,
  tag,
  items,
  value,
  stock,
  id
}: Omit<ItemKitProps, 'shirts'>) => (
  <div>
    <Title level={2} color="white" fontWeight="bold" size="medium">
      {name}
    </Title>
    <Tag>{tag}</Tag>
    <ItemsWrapper>
      <Title level={4} color="white" fontWeight="light" size="xsmall">
        {name}
      </Title>
      {items.map((item) => (
        <Text key={`kit-item-${item}`}>{item}</Text>
      ))}
    </ItemsWrapper>
    <ValueWrapper>
      <div>
        <Title level={2} color="white" fontWeight="bold" size="medium">
          R$ {value},00
        </Title>
        <Title level={5} color="white" fontWeight="light" size="small">
          + Frete
        </Title>
      </div>
      <IconWrapper href={`/loja/${id}`}>
        <AiOutlineShoppingCart />
      </IconWrapper>
    </ValueWrapper>
    <Stock>{stock}</Stock>
  </div>
)

export default ItemKit
