import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/Navbar/NavBar'

const style = {
  wrapper: 'h-screen w-screen flex flex-col ',
  main: '',
}
const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Head>
        <title>Uber eats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* navbar */}
      <NavBar />
      <div className={style.main}>{/* Map */}</div>
    </div>
  )
}

export default Home
