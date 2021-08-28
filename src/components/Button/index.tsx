import { WrapperButton } from './styles'

type ButtonProps = {
  children: string
}

const Button = ({ children }: ButtonProps) => (
  <WrapperButton>{children}</WrapperButton>
)

export default Button
