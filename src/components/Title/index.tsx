import { WrapperTitle } from './styles'

export type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  fontWeight: 400 | 600 | 700
  size: 'small' | 'medium' | 'huge'
  color: 'light' | 'dark'
  children: string
}

const Title = ({
  children,
  level,
  fontWeight,
  size,
  color = 'light'
}: TitleProps) => (
  <WrapperTitle level={level} fontWeight={fontWeight} size={size} color={color}>
    {children}
  </WrapperTitle>
)

export default Title
