import { ReactNode } from 'react'
import { WrapperText } from './styles'

export type TextProps = {
  children: ReactNode
  onClick?: () => void
  center?: boolean
}

const Text = ({ children, center, ...props }: TextProps) => (
  <WrapperText center={center} {...props}>
    {children}
  </WrapperText>
)

export default Text
