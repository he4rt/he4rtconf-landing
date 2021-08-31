import { WrapperText } from './styles'

type TextProps = {
  children: string
}

const Text = ({ children, ...props }: TextProps) => (
  <WrapperText {...props}>{children}</WrapperText>
)

export default Text
