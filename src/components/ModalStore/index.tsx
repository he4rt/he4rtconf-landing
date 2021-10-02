import Title from 'components/Title'
import Image from 'next/image'
import { Card, ImageOptions, Wrapper } from './styles'
import { ProductProps } from 'components/Products'
import { ItemKitProps } from 'components/ItemKit'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'

type ModalProps = {
  children: ReactNode
  onClick?: () => void
  item: ProductProps
  itemSelected: ItemKitProps
}
const isValidNewOption = (inputValue, selectValue) => true

const ModalStore = ({ children, item, itemSelected, ...props }: ModalProps) => {
  const { control, handleSubmit, setValue } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <Wrapper {...props}>
      <Card>
        {' '}
        <Title
          fontWeight="semibold"
          color="white"
          size="medium"
          level={2}
          style={{ marginBottom: '2rem' }}
        >
          Finalizar compra
        </Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Title fontWeight="light" color="white" size="small" level={3}>
              Selecione a estampa:
            </Title>
            <ImageOptions>
              {itemSelected.shirts.map((shirtId) => (
                <Image
                  key={`key-shirt-${item.shirts[shirtId].name}`}
                  src={item.shirts[shirtId].image}
                  width={200}
                  height={200}
                  layout="fixed"
                />
              ))}
            </ImageOptions>
            <Select
              options={itemSelected.shirts.map((shirtId) => ({
                value: item.shirts[shirtId].name,
                label: item.shirts[shirtId].name
              }))}
            />
          </div>
          <div>
            <Title fontWeight="light" color="white" size="small" level={3}>
              Selecione 4 bottons:
            </Title>
            <div>
              {item.bottons.map(({ name, image }) => (
                <Image
                  src={image}
                  key={`key-botton-${name}`}
                  width={60}
                  height={60}
                  layout="fixed"
                />
              ))}
              <Controller
                control={control}
                name="bottons"
                render={({ field: { onChange, value, ref } }) => (
                  <CreatableSelect
                    inputRef={ref}
                    isMulti
                    options={
                      value?.length >= 3
                        ? undefined
                        : item.bottons.map((botton) => ({
                            value: botton.name,
                            label: botton.name
                          }))
                    }
                    formatCreateLabel={() => undefined}
                    value={item.bottons
                      .map((botton) => ({
                        value: botton.name,
                        label: botton.name
                      }))
                      .find((c) => c.value === value)}
                    onChange={(val) => onChange(val.map((c) => c.value))}
                  />
                )}
              />
            </div>
          </div>
          <div>
            <Title fontWeight="light" color="white" size="small" level={3}>
              Selecione 2 caveiros:
            </Title>
            <div>
              {item.keychains.map(({ name, image }) => (
                <Image
                  src={image}
                  key={`key-keychains-${name}`}
                  width={60}
                  height={60}
                  layout="fixed"
                />
              ))}
              <Select
                isMulti
                options={item.keychains.map((keychain) => ({
                  value: keychain.name,
                  label: keychain.name
                }))}
              />
            </div>
          </div>
          <div>
            <Title fontWeight="light" color="white" size="small" level={3}>
              Selecione 2 adesivos:
            </Title>
            <div>
              {item.stickers.map(({ name, image }) => (
                <Image
                  src={image}
                  key={`key-sticker-${name}`}
                  width={60}
                  height={60}
                  layout="fixed"
                />
              ))}
              <Select
                isMulti
                options={item.stickers.map((sticker) => ({
                  value: sticker.name,
                  label: sticker.name
                }))}
              />
            </div>
          </div>
          <div>
            <Title fontWeight="light" color="white" size="small" level={3}>
              Selecione 1 caneca:
            </Title>
            <div>
              {item.mugs.map(({ name, image }) => (
                <Image
                  src={image}
                  key={`key-mug-${name}`}
                  width={60}
                  height={60}
                  layout="fixed"
                />
              ))}
              <Select
                isMulti
                options={item.mugs.map((mug) => ({
                  value: mug.name,
                  label: mug.name
                }))}
              />
            </div>
          </div>
          <button type="submit">compra ai filho</button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default ModalStore
