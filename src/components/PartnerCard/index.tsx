import Image from 'next/image'

import { Wrapper, Logo } from './styles'

export type PartnerProps = {
  image: string
  url: string
  tier: number
}

const PartnerCard = ({ url, image, tier, ...props }: PartnerProps) => (
  <Wrapper {...props} tier={tier}>
    <Logo href={url} tier={tier} target="_blank">
      <Image src={image} layout="fill" objectFit="contain" />
    </Logo>
  </Wrapper>
)

export default PartnerCard
