import Title from 'components/Title'

import PartnerCard from 'components/PartnerCard'

import { Wrapper, PartnersList } from './styles'

const partners = [
  'https://cdn.discordapp.com/avatars/426540070028443688/9bdc585ce3df9ba9d2b6cb0866977876.webp?1',
  'https://cdn.discordapp.com/avatars/426540070028443688/9bdc585ce3df9ba9d2b6cb0866977876.webp?2',
  'https://cdn.discordapp.com/avatars/426540070028443688/9bdc585ce3df9ba9d2b6cb0866977876.webp?3',
  'https://cdn.discordapp.com/avatars/426540070028443688/9bdc585ce3df9ba9d2b6cb0866977876.webp?4'
]

const PartnersSection = ({ ...props }) => (
  <Wrapper {...props}>
    <Title center color="white" fontWeight="bold" level={2} size="medium">
      Nossos patrocinadores
    </Title>
    <PartnersList>
      {partners.map((partner) => (
        <PartnerCard key={partner} image={partner} />
      ))}
    </PartnersList>
  </Wrapper>
)

export default PartnersSection
