/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Amit's Portfolio</title>
      </Head>

      <Header />
      <section><Hero /></section>

    </>
  )
}
