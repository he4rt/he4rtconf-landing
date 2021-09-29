import { AiOutlineShoppingCart } from 'react-icons/ai'

import Title from 'components/Title'
import Text from 'components/Text'

import {
  Tag,
  Stock,
  ImageWrapper,
  ItemsWrapper,
  ValueWrapper,
  IconWrapper
} from './styles'

export type ItemKitProps = {
  name: string
  tag: string
  items: string[]
  value: number
  stock: string
}

const ItemKit = ({ name, tag, items, value, stock }: ItemKitProps) => (
  <div style={{ padding: '15rem' }}>
    <Title level={2} color="white" fontWeight="bold" size="medium">
      {name}
    </Title>
    <Tag>{tag}</Tag>
    <ImageWrapper />
    <ItemsWrapper>
      <Title level={4} color="white" fontWeight="light" size="xsmall">
        {name}
      </Title>
      {items.map((item) => (
        <Text key={`kit-item-${item}`}>{item}</Text>
      ))}
    </ItemsWrapper>
    <ValueWrapper>
      <Title level={2} color="white" fontWeight="bold" size="medium">
        R$ {value},00
      </Title>
      <IconWrapper>
        <AiOutlineShoppingCart />
      </IconWrapper>
    </ValueWrapper>
    <Stock>{stock}</Stock>
  </div>
)

export default ItemKit
