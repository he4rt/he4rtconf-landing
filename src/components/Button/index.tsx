import { WrapperButton } from './styles'

type ButtonProps = {
  children: string
}

const Button = ({ children, ...props }: ButtonProps) => (
  <WrapperButton {...props}>{children}</WrapperButton>
)

export default Button
