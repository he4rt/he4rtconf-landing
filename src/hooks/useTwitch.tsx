import { useMutation } from 'react-query'

import { updateUserWithTwitch } from './provider'

export default function useTwitch() {
  const mutation = useMutation(updateUserWithTwitch, {
    onSuccess: (text) => {
      console.log('text', text)
    }
  })

  return mutation
}
