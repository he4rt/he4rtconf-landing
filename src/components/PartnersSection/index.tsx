import Title from 'components/Title'

import PartnerCard from 'components/PartnerCard'

import {
  Wrapper,
  PartnersList,
  Tag,
  WrapperPartner,
  PartnerItem
} from './styles'

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
  id: string
}

const wrapperCards = (partner: PartnersProps) => {
  if (partner.tier === 1) {
    return (
      <PartnerCard
        url={partner.url}
        image={partner.logo_path}
        tier={partner.tier}
      />
    )
  }

  if (partner.tier === 2) {
    return (
      <PartnerCard
        url={partner.url}
        image={partner.logo_path}
        tier={partner.tier}
      />
    )
  }

  if (partner.tier === 3) {
    return (
      <PartnerCard
        url={partner.url}
        image={partner.logo_path}
        tier={partner.tier}
      />
    )
  }

  return (
    <PartnerCard
      url={partner.url}
      image={partner.logo_path}
      tier={partner.tier}
    />
  )
}

const tagTitle = (tier: number) => {
  if (tier === 1) {
    return 'he4rt together'
  }

  if (tier === 2) {
    return 'he4rtless'
  }

  if (tier === 3) {
    return 'he4rt++'
  }

  return 'he4rt'
}

const PartnersSection = ({ partners, id, ...props }: PartnersSectionProps) => {
  const partnersTiers = Object.values(
    partners.reduce(function (r, a) {
      r[a.tier] = r[a.tier] || []
      r[a.tier].push(a)
      return r
    }, Object.create(null))
  ).reverse()

  return (
    <Wrapper id={id} {...props}>
      <Title center color="white" fontWeight="bold" level={2} size="medium">
        Nossos patrocinadores
      </Title>
      <PartnersList>
        <WrapperPartner>
          {partnersTiers.map((partnersItem, index) => (
            <div className="wrapperItem" key={`key-${index}`}>
              <Tag tier={index + 1}>{tagTitle(index + 1)}</Tag>
              <PartnerItem key={`key-item-${index}`}>
                {partnersItem.map((partner) => wrapperCards(partner))}
              </PartnerItem>
            </div>
          ))}
        </WrapperPartner>
      </PartnersList>
    </Wrapper>
  )
}

export default PartnersSection
