import { DiscordProps, TwitchProps } from 'common/Provider'

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