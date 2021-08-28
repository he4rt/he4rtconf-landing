import { WrapperText } from './styles'

type TextProps = {
  children: string
}

const Text = ({ children }: TextProps) => <WrapperText>{children}</WrapperText>

export default Text
