import Title from 'components/Title'
import Image from 'next/image'
import {
  Card,
  ImageOptions,
  Wrapper,
  Error,
  Button,
  Input,
  Divider,
  InputWrapper,
  ImageBox
} from './styles'
import { ProductProps } from 'components/Products'
import { ItemKitProps } from 'components/ItemKit'
import { useForm, Controller } from 'react-hook-form'
import CreatableSelect from 'react-select/creatable'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'
import axios from 'axios'
import Text from 'components/Text'

const schema = (limits: ItemKitProps['limits']) => {
  return yup
    .object({
      fullName: yup.string().required(),
      email: yup.string().email().required(),
      address: yup.string().required(),
      cep: yup.string().required(),
      shirt: yup.string().required(),
      bottons: yup.array().min(limits.bottons).max(limits.bottons).required(),
      keychains: yup
        .array()
        .min(limits.keychains)
        .max(limits.keychains)
        .required(),
      stickers: yup
        .array()
        .min(limits.stickers)
        .max(limits.stickers)
        .required(),
      mugs: yup.array().min(limits.mugs).max(limits.mugs).required()
    })
    .required()
}

type ModalProps = {
  children: ReactNode
  onClick?: () => void
  item: ProductProps
  itemSelected: ItemKitProps
}

const ModalStore = ({ children, item, itemSelected, ...props }: ModalProps) => {
  console.log(itemSelected)
  if (!itemSelected) return null
  const {
    control,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema(itemSelected.limits))
  })

  const [disabled, setDisabled] = useState(false)

  const onSubmit = async (data) => {
    try {
      setDisabled(true)
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/buy?itemId=${itemSelected.id}`,
        { ...data, itemSelected }
      )
      if (itemSelected.id === 0) {
        return (window.location.href = `https://api.whatsapp.com/send?phone=5585996814479&text=${res.data.messageText}`)
      } else {
        return (window.location.href = `https://api.whatsapp.com/send?phone=558597084621&text=${res.data.messageText}`)
      }
    } catch (e) {
      alert('Ocorreu um erro ao realizar a compra.')
    }
  }

  return (
    <Wrapper {...props}>
      <Card>
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
          <InputWrapper>
            <Title fontWeight="light" color="white" size="small" level={3}>
              Nome completo:
            </Title>
            <Input {...register('fullName')} placeholder="Nome completo" />
            <Error>{errors.fullName?.message}</Error>
          </InputWrapper>
          <InputWrapper>
            <Title fontWeight="light" color="white" size="small" level={3}>
              E-mail:
            </Title>
            <Input {...register('email')} placeholder="E-mail" />
            <Error>{errors.email?.message}</Error>
          </InputWrapper>
          <InputWrapper>
            <Title fontWeight="light" color="white" size="small" level={3}>
              Endereço:
            </Title>
            <Input {...register('address')} placeholder="Endereço" />

            <Error>{errors.address?.message}</Error>
          </InputWrapper>
          <InputWrapper>
            <Title fontWeight="light" color="white" size="small" level={3}>
              CEP:
            </Title>
            <Input {...register('cep')} placeholder="CEP" />
            <Error>{errors.cep?.message}</Error>
          </InputWrapper>
          <Divider />
          <InputWrapper>
            <Title fontWeight="light" color="white" size="small" level={3}>
              Selecione a estampa:
            </Title>
            <ImageOptions style={{ marginTop: '1.5rem' }}>
              {itemSelected.shirts.map((shirtId) => (
                <ImageBox key={`key-shirt-${item.shirts[shirtId].name}`}>
                  {console.log(shirtId)}
                  <Image
                    src={item.shirts[shirtId].image}
                    width={250}
                    height={250}
                    layout="fixed"
                  />
                  <Title
                    fontWeight="light"
                    color="white"
                    size="xsmall"
                    level={3}
                  >
                    {item.shirts[shirtId].name}
                  </Title>
                </ImageBox>
              ))}
            </ImageOptions>
            <Controller
              control={control}
              name="shirt"
              render={({ field: { onChange, value, ref } }) => (
                <CreatableSelect
                  inputRef={ref}
                  options={itemSelected.shirts.map((shirtId) => ({
                    value: item.shirts[shirtId].name,
                    label: item.shirts[shirtId].name
                  }))}
                  id="select"
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                      ...theme.colors,
                      text: 'orangered',
                      primary25: '#782BF1',
                      primary: 'black',
                      neutral0: 'black'
                    }
                  })}
                  formatCreateLabel={() => undefined}
                  value={itemSelected.shirts
                    .map((shirtId) => ({
                      value: item.shirts[shirtId].name,
                      label: item.shirts[shirtId].name
                    }))
                    .find((c) => c.value === value)}
                  onChange={(val) => onChange(val.value)}
                />
              )}
            />
            <Error>{errors.shirt?.message}</Error>
          </InputWrapper>
          <InputWrapper>
            <Title fontWeight="light" color="white" size="small" level={3}>
              Selecione {itemSelected.limits.bottons} bottons:
            </Title>
            <div>
              <div
                style={{
                  display: 'flex',
                  gap: '3rem',
                  flexWrap: 'wrap',
                  marginTop: '1.5rem'
                }}
              >
                {item.bottons.map(({ name, image }) => (
                  <ImageBox key={`key-botton-${name}`}>
                    <Image
                      src={image}
                      width={80}
                      height={80}
                      layout="intrinsic"
                    />
                    <Title
                      fontWeight="light"
                      color="white"
                      size="xsmall"
                      level={3}
                    >
                      {name}
                    </Title>
                  </ImageBox>
                ))}
              </div>
              <Controller
                control={control}
                name="bottons"
                render={({ field: { onChange, value, ref } }) => (
                  <CreatableSelect
                    inputRef={ref}
                    isMulti
                    id="select"
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 6,
                      colors: {
                        ...theme.colors,
                        text: 'orangered',
                        primary25: '#782BF1',
                        primary: 'black',
                        neutral0: 'black'
                      }
                    })}
                    options={
                      value?.length >= itemSelected.limits.bottons
                        ? []
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
              <Error>{errors.bottons?.message}</Error>
            </div>
          </InputWrapper>
          <InputWrapper>
            <Title fontWeight="light" color="white" size="small" level={3}>
              Selecione {itemSelected.limits.keychains} chaveiros:
            </Title>
            <div>
              <div
                style={{ display: 'flex', gap: '3rem', marginTop: '1.5rem' }}
              >
                {item.keychains.map(({ name, image }) => (
                  <ImageBox key={`key-keychains-${name}`}>
                    <Image
                      src={image}
                      width={80}
                      height={80}
                      layout="intrinsic"
                    />
                    <Title
                      fontWeight="light"
                      color="white"
                      size="xsmall"
                      level={3}
                    >
                      {name}
                    </Title>
                  </ImageBox>
                ))}
              </div>
              <Controller
                control={control}
                name="keychains"
                render={({ field: { onChange, value, ref } }) => (
                  <CreatableSelect
                    inputRef={ref}
                    isMulti
                    id="select"
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 6,
                      colors: {
                        ...theme.colors,
                        text: 'orangered',
                        primary25: '#782BF1',
                        primary: 'black',
                        neutral0: 'black'
                      }
                    })}
                    options={
                      value?.length >= itemSelected.limits.keychains
                        ? []
                        : item.keychains.map((keychain) => ({
                            value: keychain.name,
                            label: keychain.name
                          }))
                    }
                    formatCreateLabel={() => undefined}
                    value={item.keychains
                      .map((botton) => ({
                        value: botton.name,
                        label: botton.name
                      }))
                      .find((c) => c.value === value)}
                    onChange={(val) => onChange(val.map((c) => c.value))}
                  />
                )}
              />
              <Error>{errors.keychains?.message}</Error>
            </div>
          </InputWrapper>
          <InputWrapper>
            <Title fontWeight="light" color="white" size="small" level={3}>
              Selecione {itemSelected.limits.stickers} adesivos:
            </Title>
            <div>
              <div
                style={{ display: 'flex', gap: '3rem', marginTop: '1.5rem' }}
              >
                {item.stickers.map(({ name, image }) => (
                  <ImageBox key={`key-sticker-${name}`}>
                    <Image
                      src={image}
                      width={120}
                      height={120}
                      layout="intrinsic"
                    />
                    <Title
                      fontWeight="light"
                      color="white"
                      size="xsmall"
                      level={3}
                    >
                      {name}
                    </Title>
                  </ImageBox>
                ))}
              </div>
              <Controller
                control={control}
                name="stickers"
                render={({ field: { onChange, value, ref } }) => (
                  <CreatableSelect
                    inputRef={ref}
                    isMulti
                    id="select"
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 6,
                      colors: {
                        ...theme.colors,
                        text: 'orangered',
                        primary25: '#782BF1',
                        primary: 'black',
                        neutral0: 'black'
                      }
                    })}
                    options={
                      value?.length >= itemSelected.limits.stickers
                        ? []
                        : item.stickers.map((sticker) => ({
                            value: sticker.name,
                            label: sticker.name
                          }))
                    }
                    formatCreateLabel={() => undefined}
                    value={item.stickers
                      .map((botton) => ({
                        value: botton.name,
                        label: botton.name
                      }))
                      .find((c) => c.value === value)}
                    onChange={(val) => onChange(val.map((c) => c.value))}
                  />
                )}
              />
              <Error>{errors.stickers?.message}</Error>
            </div>
          </InputWrapper>
          <InputWrapper>
            <Title fontWeight="light" color="white" size="small" level={3}>
              Selecione {itemSelected.limits.mugs} caneca:
            </Title>
            <div>
              <div
                style={{ display: 'flex', gap: '3rem', marginTop: '1.5rem' }}
              >
                {item.mugs.map(({ name, image }) => (
                  <ImageBox key={`key-mug-${name}`}>
                    <Image
                      src={image}
                      width={190}
                      height={150}
                      layout="intrinsic"
                      objectFit="cover"
                    />
                    <Title
                      fontWeight="light"
                      color="white"
                      size="xsmall"
                      level={3}
                    >
                      {name}
                    </Title>
                  </ImageBox>
                ))}
              </div>
              <Controller
                control={control}
                name="mugs"
                render={({ field: { onChange, value, ref } }) => (
                  <CreatableSelect
                    inputRef={ref}
                    isMulti
                    id="select"
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 6,
                      colors: {
                        ...theme.colors,
                        text: 'orangered',
                        primary25: '#782BF1',
                        primary: 'black',
                        neutral0: 'black'
                      }
                    })}
                    options={
                      value?.length >= itemSelected.limits.mugs
                        ? []
                        : item.mugs.map((sticker) => ({
                            value: sticker.name,
                            label: sticker.name
                          }))
                    }
                    formatCreateLabel={() => undefined}
                    value={item.mugs
                      .map((botton) => ({
                        value: botton.name,
                        label: botton.name
                      }))
                      .find((c) => c.value === value)}
                    onChange={(val) => onChange(val.map((c) => c.value))}
                  />
                )}
              />

              <Error>{errors.mugs?.message}</Error>
            </div>
          </InputWrapper>
          <Button type="submit" disabled={disabled}>
            {disabled ? 'Carregando...' : 'COMPRAR'}
          </Button>
          <Text>
            <small>
              * A etapa final de compra será finalizada no Whatsapp.
            </small>
          </Text>
        </form>
      </Card>
      <Error>* Só é possível escolher as opções informadas na descrição.</Error>
      <Error>* O frete é definido apenas na etapa de compra.</Error>
      <Error>* A etapa final de compra será finalizada no Whatsapp.</Error>
      <Error>* Encomendas com início de fabricação ao fim da pré-venda.</Error>
      <Error>
        * Não temos nenhuma % de lucro nos pedidos, apenas custo de produção.
      </Error>
    </Wrapper>
  )
}

export default ModalStore
