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
  bottons: string[]
  keychains: string[]
  stickers: string[]
  mugs: string[]
  tshirts: string[]
}

const ItemKit = ({
  name,
  tag,
  items,
  value,
  stock,
  tshirts,
  bottons,
  keychains,
  stickers,
  mugs
}: ItemKitProps) => (
  <div style={{ padding: '15rem' }}>
    <Title level={2} color="white" fontWeight="bold" size="medium">
      {name}
    </Title>
    <Tag>{tag}</Tag>
    <ImageWrapper>
      {tshirts.map((tshirt) => (
        <img key={`key-tshirt-${tshirt}`} src={tshirt} />
      ))}
    </ImageWrapper>
    <ImageWrapper>
      <div>
        <Text>Bottons</Text>
        {bottons.map((botton) => (
          <img src={botton} key={`key-bottom-${botton}`} />
        ))}
      </div>
      <div>
        <Text>Chaveiros</Text>
        {keychains.map((keychain) => (
          <img src={keychain} key={`key-keychain-${keychain}`} />
        ))}
      </div>
      <div>
        <Text>Adesivos</Text>
        {stickers.map((sticker) => (
          <img src={sticker} key={`key-sticker-${sticker}`} />
        ))}
      </div>
      <div>
        <Text>Canecas</Text>
        {mugs.map((mug) => (
          <img src={mug} key={`key-mug-${mug}`} />
        ))}
      </div>
    </ImageWrapper>
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
      <IconWrapper>
        <AiOutlineShoppingCart />
      </IconWrapper>
    </ValueWrapper>
    <Stock>{stock}</Stock>
  </div>
)

export default ItemKit
