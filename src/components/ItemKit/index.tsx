import { AiOutlineShoppingCart } from 'react-icons/ai'

import Title from 'components/Title'
import Text from 'components/Text'

import {
  Tag,
  Stock,
  ImageWrapper,
  ItemsWrapper,
  ValueWrapper,
  IconWrapper,
  Box,
  SubItem
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
  <div>
    <Title level={2} color="white" fontWeight="bold" size="medium">
      {name}
    </Title>
    <Tag>{tag}</Tag>
    <Box>
      <ImageWrapper>
        {tshirts.map((tshirt) => (
          <img key={`key-tshirt-${tshirt}`} src={tshirt} />
        ))}
      </ImageWrapper>
    </Box>
    <Box>
      <SubItem>
        <Text>Bottons</Text>
        <div>
          {bottons.map((botton) => (
            <img src={botton} key={`key-bottom-${botton}`} />
          ))}
        </div>
      </SubItem>
      <SubItem>
        <Text>Chaveiros</Text>
        <div>
          {keychains.map((keychain) => (
            <img src={keychain} key={`key-keychain-${keychain}`} />
          ))}
        </div>
      </SubItem>
      <SubItem>
        <Text>Adesivos</Text>
        <div>
          {stickers.map((sticker) => (
            <img src={sticker} key={`key-sticker-${sticker}`} />
          ))}
        </div>
      </SubItem>
      <SubItem>
        <Text>Canecas</Text>
        <div>
          {mugs.map((mug) => (
            <img src={mug} key={`key-mug-${mug}`} />
          ))}
        </div>
      </SubItem>
    </Box>
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
