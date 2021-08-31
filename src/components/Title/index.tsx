import { WrapperTitle } from './styles'

export type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  fontWeight: 400 | 600 | 700
  size: 'small' | 'medium' | 'huge'
  color: 'white' | 'gray'
  children: string
  center?: boolean
}

const Title = ({
  children,
  level,
  fontWeight,
  size,
  color = 'white',
  center,
  ...props
}: TitleProps) => (
  <WrapperTitle
    center={center}
    level={level}
    fontWeight={fontWeight}
    size={size}
    color={color}
    {...props}
  >
    {children}
  </WrapperTitle>
)

export default Title
