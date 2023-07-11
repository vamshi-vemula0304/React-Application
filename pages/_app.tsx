import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NavBar from '@/components/navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Ubuntu:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
    
  )
}
