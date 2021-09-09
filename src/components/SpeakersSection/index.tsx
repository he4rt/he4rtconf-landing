import Title from 'components/Title'

import { Wrapper, SpeakersList } from './styles'
import SpeakerCard from 'components/SpeakerCard'

export type SpeakersProps = {
  id: number
  name: string
  title: string
  slug: string
  description: string
  badge_path: string
  twitter_url: string
  github_url: string
  instagram_url: string
  linkedin_url: string
  active: boolean
  created_at: string
  updated_at: string
}

type SpeakersSectionProps = {
  speakers: SpeakersProps[]
}

const SpeakersSection = ({ speakers, ...props }: SpeakersSectionProps) => (
  <Wrapper {...props}>
    <Title center color="white" fontWeight="bold" level={2} size="medium">
      Palestrantes do evento
    </Title>
    <SpeakersList>
      {speakers.map((speaker) => (
        <SpeakerCard key={speaker.id} {...speaker} />
      ))}
    </SpeakersList>
  </Wrapper>
)

export default SpeakersSection
