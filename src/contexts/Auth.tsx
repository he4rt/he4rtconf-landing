import { createContext, useState } from 'react'
import Router from 'next/router'
import { setCookie } from 'nookies'
export const AuthContext = createContext({})

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null)

  const isAuthenticated = !!user

  const signIn = async (token: string) => {
    console.log(token)
    setCookie(undefined, 'access_token', token, {
      maxAge: 60 * 60 * 1
    })
    setUser({ user: 'Eu', token })

    Router.push('/profile')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
