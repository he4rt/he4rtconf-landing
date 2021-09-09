import Image from 'next/image'

import { Wrapper, Logo } from './styles'

type PartnerProps = {
  image: string
  url: string
}

const PartnerCard = ({ url, image, ...props }: PartnerProps) => (
  <Wrapper {...props}>
    <Logo href={url} target="_blank">
      <Image src={image} layout="fill" objectFit="contain" />
    </Logo>
  </Wrapper>
)

export default PartnerCard
