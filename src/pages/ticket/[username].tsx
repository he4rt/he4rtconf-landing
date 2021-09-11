import TicketPage from 'components/TicketPage'
import TicketToImage from 'components/TicketToImage'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { axiosClient } from 'services/axios'

export type TicketImageProps = {
  id: number
  name: string
  image: string
  github_username: string
}

const TicketImage = ({
  id,
  name,
  image,
  github_username
}: TicketImageProps) => {
  const { query } = useRouter()
  if (!query.username) return <></>

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
  const { data } = await axios.get(`/users/${username}`)

  return {
    props: {
      ...data
    }
  }
}

export default TicketImage
