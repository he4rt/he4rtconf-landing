import { ReactNode } from 'react'
import { WrapperButton } from './styles'

type ButtonProps = {
  children: ReactNode
}

const Button = ({ children, ...props }: ButtonProps) => (
  <WrapperButton {...props}>{children}</WrapperButton>
)

export default Button
