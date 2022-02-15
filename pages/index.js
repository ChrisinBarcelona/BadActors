import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Bad Actors Studio." />
        <p className="description">
          Get started by pressing <a href='https://buy.stripe.com/bIYg0g28l3fZ11KaEH'><button> Sign up now</button>
          </a>
        </p>

      </main>
    </div>
  )

}

