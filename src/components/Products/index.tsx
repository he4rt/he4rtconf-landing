import Text from 'components/Text'

import { Box, ImageWrapper, SubItem, OthersProducts } from './styles'

type ProductItemProps = {
  name: string
  image: string
}

export type ProductProps = {
  shirts: ProductItemProps[]
  bottons: ProductItemProps[]
  keychains: ProductItemProps[]
  stickers: ProductItemProps[]
  mugs: ProductItemProps[]
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
      {shirts.map(({ name, image }) => (
        <img key={`key-shirt-${name}`} src={image} />
      ))}
    </ImageWrapper>
    <OthersProducts>
      <SubItem>
        <Text>Bottons</Text>
        <div>
          {bottons.map(({ name, image }) => (
            <img key={`key-shirt-${name}`} src={image} />
          ))}
        </div>
      </SubItem>
      <SubItem>
        <Text>Chaveiros</Text>
        <div>
          {keychains.map(({ name, image }) => (
            <img key={`key-shirt-${name}`} src={image} />
          ))}
        </div>
      </SubItem>
      <SubItem>
        <Text>Adesivos</Text>
        <div>
          {stickers.map(({ name, image }) => (
            <img key={`key-shirt-${name}`} src={image} />
          ))}
        </div>
      </SubItem>
      <SubItem>
        <Text>Canecas</Text>
        <div>
          {mugs.map(({ name, image }) => (
            <img className="mug" key={`key-shirt-${name}`} src={image} />
          ))}
        </div>
      </SubItem>
    </OthersProducts>
  </Box>
)

export default Products
