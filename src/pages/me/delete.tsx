import { GetServerSideProps } from 'next'
import { parseCookies, destroyCookie } from 'nookies'
import { axiosClient } from 'services/axios'

const Logout = () => <></>

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { access_token } = parseCookies(ctx)
  const axios = await axiosClient(ctx)

  if (access_token && ctx.query?.provider) {
    await axios.get(`https://conf.he4rt.app/auth/revoke/${ctx.query.provider}`)
  }

  if (access_token && !ctx.query?.provider) {
    await axios.get(`https://conf.he4rt.app/auth/revoke/twitch`)
    await axios.get(`https://conf.he4rt.app/auth/revoke/discord`)
    await axios.get(`https://conf.he4rt.app/auth/revoke/github`)
    destroyCookie(ctx, 'access_token', { path: '/' })
  }

  return {
    redirect: {
      destination: '/',
      permanent: false
    }
  }
}

export default Logout
