import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import 'semantic-ui-css/semantic.min.css'

export default function CMApp({Component, pageProps}) {
  return (
    <div>
      <Head>
        <title>Pokemon View</title>
      </Head>
      <Header />
      <div className='index-content'>
        <Component {...pageProps} />
      </div>
      <Footer />
      <style jsx>{`
        .index-content {
          margin-top: 30px;
          margin-left: 50px;
          margin-right: 50px;
        },

      `}</style>
    </div>
  )
}
