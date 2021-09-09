import Title from 'components/Title'

import PartnerCard from 'components/PartnerCard'

import { Wrapper, PartnersList } from './styles'

const PartnersSection = ({ partners, ...props }: any) => (
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
