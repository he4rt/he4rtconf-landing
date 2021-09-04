import { GetServerSideProps } from 'next'
import { parseCookies, destroyCookie } from 'nookies'

const Logout = () => <></>

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { access_token } = parseCookies(ctx)

  if (access_token) {
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
