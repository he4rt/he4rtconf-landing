import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function ticketImages(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return
  const { itemId } = req.query || {}
  if (!req.body) {
    return res.status(422).send()
  }
  const orderData = {
    itemId,
    id: `${new Date().getTime().toString(36)}`,
    ...req.body
  }
  try {
    const { data } = await axios.post(process.env.DISCORD_WEBHOOK_URL, {
      content: `${new Date()}\`\`\`json\n${JSON.stringify(
        orderData,
        null,
        2
      )}\`\`\``
    })
    return res.status(200).send({
      messageText: `Olá, queria finalizar meu pedido com o ID ${orderData.id}! Quais são as formas de pagamento e frete?`
    })
  } catch (e) {
    console.log(e.response.data.content, 'error')
  }

  res.send('top')
}
