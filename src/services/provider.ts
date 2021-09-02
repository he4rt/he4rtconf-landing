export type TwitchProps = {
  twitch_username: string
  twitch_id: string
}

export type DiscordProps = {
  discord_username: string
  discord_id: string
}

export type InfoProps = {
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

export const fetchMe = fetch('api/userme').then((res) => res.json())

export const updateUserWithTwitch = async ({
  twitch_id,
  twitch_username
}: TwitchProps) => {
  const response = await fetch('api', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      twitch_id,
      twitch_username
    })
  })

  return response.json()
}

export const updateUserWithDiscord = async ({
  discord_id,
  discord_username
}: DiscordProps) => {
  const response = await fetch('api', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      discord_id,
      discord_username
    })
  })

  return response.json()
}
