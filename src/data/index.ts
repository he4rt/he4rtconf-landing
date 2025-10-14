import { PartnersProps } from 'components/PartnersSection'
import { SpeakersProps } from 'components/SpeakersSection'
import { ScheduleProps, TalkProps } from 'components/Timeline'

export const speakers: SpeakersProps[] = [
  {
    id: 1,
    name: 'Ada Lovelace',
    title: 'Computing Pioneer',
    slug: 'ada-lovelace',
    description: 'Mathematics, algorithms and imagination.',
    badge_path: '/img/speakers/ada.png',
    twitter_url: 'https://twitter.com/he4rtdevs',
    github_url: 'https://github.com/he4rt',
    instagram_url: null,
    linkedin_url: null,
    active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 2,
    name: 'Linus Torvalds',
    title: 'Linux Creator',
    slug: 'linus-torvalds',
    description: 'Open source, kernels and pragmatism.',
    badge_path: '/img/speakers/linus.png',
    twitter_url: null,
    github_url: 'https://github.com/torvalds',
    instagram_url: null,
    linkedin_url: null,
    active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
]

export const partners: PartnersProps[] = [
  {
    id: 1,
    name: 'He4rt Devs',
    tier: 1,
    url: 'https://heartdevs.com/',
    logo_path: '/img/partners/he4rtdevs.svg',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 2,
    name: 'Open Source Org',
    tier: 2,
    url: 'https://opensource.org/',
    logo_path: '/img/partners/opensource.svg',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
]

const mockTalk = (id: number, speakerIndex = 0): TalkProps => ({
  id,
  speaker_id: speakers[speakerIndex].id,
  title: `Talk #${id}: ${speakers[speakerIndex].name}`,
  date: new Date().toISOString(),
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  talk_date: '2025-10-01',
  talk_hour: '10:00',
  status: 'Em breve',
  speaker: speakers[speakerIndex]
})

export const talks: ScheduleProps[] = [
  {
    day: 'Dia 01',
    talks: [mockTalk(1, 0), mockTalk(2, 1)]
  },
  {
    day: 'Dia 02',
    talks: [mockTalk(3, 0), mockTalk(4, 1)]
  },
  {
    day: 'Dia 03',
    talks: [mockTalk(5, 1), mockTalk(6, 0)]
  }
]
