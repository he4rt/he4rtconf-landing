import { RevokeProps } from 'common/Provider'
import { axiosClient } from './axios'
import { parseCookies } from 'nookies'

export const revokeUserOAuth = async ({ provider }: RevokeProps) => {}

export const deleteAccount = async () => {
  const { access_token } = parseCookies()
  console.log(access_token)
}
