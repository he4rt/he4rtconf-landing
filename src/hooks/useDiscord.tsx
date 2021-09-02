import { useMutation } from 'react-query'

import { updateUserWithDiscord } from './provider'

export default function useDiscord() {
  const mutation = useMutation(updateUserWithDiscord, {
    onSuccess: (text) => {
      console.log('text', text)
    }
  })

  return mutation
}
