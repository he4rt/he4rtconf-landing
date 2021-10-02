import Text from 'components/Text'

import { Box, ImageWrapper, SubItem, OthersProducts } from './styles'

export type ProductProps = {
  shirts: string[]
  bottons: string[]
  keychains: string[]
  stickers: string[]
  mugs: string[]
}

const Products = ({
  shirts,
  bottons,
  keychains,
  stickers,
  mugs
}: ProductProps) => (
  <Box>
    <ImageWrapper>
      {shirts.map((shirt) => (
        <img key={`key-shirt-${shirt}`} src={shirt} />
      ))}
    </ImageWrapper>
    <OthersProducts>
      <SubItem>
        <Text>Bottons</Text>
        <div>
          {bottons.map((botton) => (
            <img key={`key-shirt-${botton}`} src={botton} />
          ))}
        </div>
      </SubItem>
      <SubItem>
        <Text>Chaveiros</Text>
        <div>
          {keychains.map((keychain) => (
            <img key={`key-shirt-${keychain}`} src={keychain} />
          ))}
        </div>
      </SubItem>
      <SubItem>
        <Text>Adesivos</Text>
        <div>
          {stickers.map((sticker) => (
            <img key={`key-shirt-${sticker}`} src={sticker} />
          ))}
        </div>
      </SubItem>
      <SubItem>
        <Text>Canecas</Text>
        <div>
          {mugs.map((mug) => (
            <img className="mug" key={`key-shirt-${mug}`} src={mug} />
          ))}
        </div>
      </SubItem>
    </OthersProducts>
  </Box>
)

export default Products
