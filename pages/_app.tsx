import { Footer, Navbar } from '@/components'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <div className='container mx-auto fonts-sans'>
      <Navbar />
      <main><Component {...pageProps} /></main>
      <Footer />
    </div>
  </>
}
