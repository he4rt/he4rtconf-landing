import { GetServerSideProps } from 'next'
import { axiosClient } from 'services/axios'

const Discord = () => <></>

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const axios = axiosClient(ctx)

  if (ctx.query.code) {
    const { data } = await axios.get('auth/oauth/discord', {
      params: { code: ctx.query?.code }
    })
    await axios.put('users/me', {
      provider: 'discord',
      id: data.id,
      username: data.name,
      access_token: data.access_token,
      refresh_token: data.refresh_token
    })
  }

  return {
    redirect: {
      destination: '/me',
      permanent: false
    }
  }
}

export default Discord
