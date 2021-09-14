import { ReactNode } from 'react'
import { WrapperTitle } from './styles'

export type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  fontWeight: 'light' | 'normal' | 'semibold' | 'bold'
  size: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'huge'
  color: 'white' | 'gray'
  children: string | ReactNode
  center?: boolean
  className?: string
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
