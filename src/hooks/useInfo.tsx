import { useQuery } from 'react-query'

type InfoProps = {
  id: number
  email: string
  image: string
  discord_id: string
  twitch_id: string
  discord_username: string
  twitch_username: string
  github_username: string
  created_at: string
  updated_at: string
  messages: {
    discord: number
    twitch: number
  }
  character: {
    id: number
    user_id: number
    level: number
    current_exp: number
    created_at: string
    updated_at: string
    levelup_exp: {
      id: number
      required: number
      created_at: string
      updated_at: string
    }
    levelup_percentage: string
  }
}

export default function useInfo() {
  return useQuery<InfoProps, Error>('user', () =>
    fetch('api/userme').then((res) => res.json())
  )
}
