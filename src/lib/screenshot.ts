import { axiosClient } from 'services/axios'

export default async function screenshot(username: string) {
  const axios = await axiosClient()
  const res = await axios.get(
    `${process.env.AWS_FUNCTION_API_GATEWAY}/?username=${username}`,
    {
      responseType: 'arraybuffer'
    }
  )
  console.log(
    `[${new Date().toLocaleString('pt-BR')}] Request screenshot AWS function.`
  )
  return res.data
}
