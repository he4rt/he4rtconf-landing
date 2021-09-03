import axios from 'axios'
import { parseCookies } from 'nookies'

export const axiosClient = (ctx?: any) => {
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
