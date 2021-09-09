import Title from 'components/Title'

import PartnerCard from 'components/PartnerCard'

import { Wrapper, PartnersList } from './styles'

export type PartnersProps = {
  id: number
  name: string
  tier: number
  url: string
  logo_path: string
  created_at: string
  updated_at: string
}

type PartnersSectionProps = {
  partners: PartnersProps[]
}

const PartnersSection = ({ partners, ...props }: PartnersSectionProps) => (
  <Wrapper {...props}>
    <Title center color="white" fontWeight="bold" level={2} size="medium">
      Nossos patrocinadores
    </Title>
    <PartnersList>
      {partners.map((partner) => (
        <PartnerCard
          key={partner.id}
          url={partner.url}
          image={partner.logo_path}
        />
      ))}
    </PartnersList>
  </Wrapper>
)

export default PartnersSection
