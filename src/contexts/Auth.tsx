import { createContext, useContext, useState } from 'react'
import Router from 'next/router'
import { setCookie } from 'nookies'

import { WithChildren } from 'common/WithChildren'
import { InfoProps } from 'common/User'

type UserProps = {
  user?: InfoProps
  access_token: string
}

type AuthContextProps = {
  user?: UserProps
  isAuthenticated: boolean
  signIn: (token: string) => void
}

export const AuthContext = createContext<AuthContextProps>({
  user: undefined,
  isAuthenticated: false,
  signIn: () => console.error('no auth provider')
})

export const AuthProvider = ({ children }: WithChildren) => {
  const [user, setUser] = useState<UserProps>()

  const isAuthenticated = !!user

  const signIn = async (token: string) => {
    setCookie(undefined, 'access_token', token, {
      maxAge: 60 * 60 * 1
    })

    setUser({ user: undefined, access_token: token })

    Router.push('/me')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)

  if (ctx === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return ctx
}
