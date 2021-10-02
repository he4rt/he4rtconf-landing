import Title from 'components/Title'
import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { Card, ImageOptions, Wrapper } from './styles'

type ModalProps = {
  children: ReactNode
  onClick?: () => void
}

export function Select({ register, options, name, multiple, ...rest }) {
  return (
    <div className="select is-medium" style={{ width: '100%' }}>
      <select
        style={{ width: '100%' }}
        name={name}
        ref={register}
        multiple={multiple}
        {...rest}
      >
        {options.map((value) => (
          <option key={value} value={value}>
            {name} {value}
          </option>
        ))}
      </select>
    </div>
  )
}

const ModalStore = ({ children, item, ...props }: ModalProps) => {
  const { register, handleSubmit, setValue } = useForm()
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
              {item.shirts.map((shirt) => (
                <Image
                  key={`key-shirt-${shirt}`}
                  src={shirt}
                  width={200}
                  height={200}
                  layout="fixed"
                />
              ))}
            </ImageOptions>
            <Select
              name="Camisa"
              options={item.shirts.map((_, index) => index)}
            />
          </div>
          <div>
            <Title fontWeight="light" color="white" size="small" level={3}>
              Selecione 4 bottons:
            </Title>
            <label className="checkbox">
              {item.bottons.map((botton) => (
                <>
                  <input type="checkbox" />
                  <Image src={botton} width={60} height={60} layout="fixed" />
                </>
              ))}
            </label>
          </div>
          <div>
            <Title fontWeight="light" color="white" size="small" level={3}>
              Selecione 2 caveiros:
            </Title>
            <label className="checkbox">
              {item.keychains.map((botton) => (
                <>
                  <input type="checkbox" />
                  <Image src={botton} width={60} height={60} layout="fixed" />
                </>
              ))}
            </label>
          </div>
          <div>
            <Title fontWeight="light" color="white" size="small" level={3}>
              Selecione 2 adesivos:
            </Title>
            <label className="checkbox">
              {item.stickers.map((botton) => (
                <>
                  <input type="checkbox" />
                  <Image src={botton} width={60} height={60} layout="fixed" />
                </>
              ))}
            </label>
          </div>
          <div>
            <Title fontWeight="light" color="white" size="small" level={3}>
              Selecione 1 caneca:
            </Title>
            <label className="checkbox">
              {item.mugs.map((botton) => (
                <>
                  <input type="checkbox" />
                  <Image src={botton} width={60} height={60} layout="fixed" />
                </>
              ))}
            </label>
          </div>
        </form>
      </Card>
    </Wrapper>
  )
}

export default ModalStore
