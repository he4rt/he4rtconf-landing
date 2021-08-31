import { ReactNode } from 'react'
import { WrapperText } from './styles'

type TextProps = {
  children: ReactNode
}

const Text = ({ children, ...props }: TextProps) => (
  <WrapperText {...props}>{children}</WrapperText>
)

export default Text
