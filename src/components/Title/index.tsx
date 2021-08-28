import { WrapperTitle } from './styles'

export type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  fontWeight: 600 | 700
  size: 'small' | 'huge'
  children: string
}

const Title = ({ children, level, fontWeight, size }: TitleProps) => (
  <WrapperTitle level={level} fontWeight={fontWeight} size={size}>
    {children}
  </WrapperTitle>
)

export default Title
