import { NextApiRequest, NextApiResponse } from 'next'
import screenshot from 'lib/screenshot'
import { axiosClient } from 'services/axios'

export default async function ticketImages(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username } = req.query || {}
  if (!username) return res.status(404).send('User not found')
  const axios = await axiosClient()
  try {
    await axios.get(`/users/${username}`)
    const file = await screenshot(username as string)
    res.setHeader('Content-Type', `image/png`)
    res.setHeader(
      'Cache-Control',
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    )
    res.statusCode = 200
    res.end(file)
  } catch (e) {
    res.status(404).send('User not found')
  }
}
