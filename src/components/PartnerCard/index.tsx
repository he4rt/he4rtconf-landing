import Image from 'next/image'

import { Wrapper, Logo } from './styles'

type PartnerProps = {
  image: string
}

const PartnerCard = ({ image, ...props }: PartnerProps) => (
  <Wrapper {...props}>
    <Logo>
      <Image src={image} layout="fill" objectFit="cover" />
    </Logo>
  </Wrapper>
)

export default PartnerCard
