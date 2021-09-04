import { ReactNode } from 'react'
import { WrapperButton } from './styles'

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
}

const Button = ({ children, ...props }: ButtonProps) => (
  <WrapperButton {...props}>
    <span>{children}</span>
  </WrapperButton>
)

export default Button
