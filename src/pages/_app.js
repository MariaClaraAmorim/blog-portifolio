import '../../styles/globals.css'
import Head from 'next/head'
import Header from '../../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>New Portifolio</title>
       </Head>
       <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp