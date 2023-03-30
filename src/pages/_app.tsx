import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import Header from '../components/header'

export default function App({ Component, pageProps }: AppProps) {
  const { user } = pageProps
  return (
    <UserProvider user={user}>
      <Header />
      <Component {...pageProps} />
    </UserProvider>
  )
}
