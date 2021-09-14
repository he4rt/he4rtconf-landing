import { InfoProps } from 'common/User'
import TicketPage from 'components/TicketPage'
import TicketToImage from 'components/TicketToImage'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { axiosClient } from 'services/axios'

export type TicketImageProps = {
  user: Pick<
    InfoProps,
    'name' | 'image' | 'github_username' | 'id' | 'messages'
  >
}

const TicketImage = ({ user }: TicketImageProps) => {
  const { query } = useRouter()
  if (!query.username || !user) return <></>

  const { id, name, image, github_username } = user

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <TicketPage>
        <style jsx global>{`
          body {
            background: none;
          }
        `}</style>
        <TicketToImage
          githubUsername={name}
          username={github_username}
          ticketNumber={id}
          userImg={image}
        />
      </TicketPage>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const axios = await axiosClient(ctx)
  const { username } = ctx.query
  if (!username) {
    return {
      notFound: true
    }
  }

  try {
    const { data } = await axios.get(`/users/${username}`)

    return {
      props: {
        user: data
      }
    }
  } catch (e) {
    return {
      notFound: true
    }
  }
}

export default TicketImage
