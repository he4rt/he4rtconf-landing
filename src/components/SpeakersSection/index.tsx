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
  twitter_url: string | null
  github_url: string | null
  instagram_url: string | null
  linkedin_url: string | null
  active: boolean
  created_at: string
  updated_at: string
}

type SpeakersSectionProps = {
  speakers: SpeakersProps[]
  id?: string
}

const SpeakersSection = ({ speakers, id, ...props }: SpeakersSectionProps) => (
  <Wrapper id={id} {...props}>
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
