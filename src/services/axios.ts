import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'
import { ParsedUrlQuery } from 'querystring'

export const axiosClient = (
  ctx?: GetServerSidePropsContext<ParsedUrlQuery>
) => {
  const { access_token } = parseCookies(ctx)

  const confApi = axios.create({
    baseURL: process.env.API_URL
  })

  confApi.interceptors.request.use((config) => {
    config.headers['Authorization'] = `Bearer ${access_token}`
    return config
  })

  if (access_token) {
    confApi.defaults.headers['Authorization'] = `Bearer ${access_token}`
  }

  return confApi
}
