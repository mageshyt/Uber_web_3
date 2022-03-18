import type { NextPage } from 'next'
import Head from 'next/head'
import Confirm from '../components/Confirm'
import LocationSelector from '../components/LocationSelector'
import Map from '../components/Map/Map'
import NavBar from '../components/Navbar/NavBar'

const style = {
  wrapper: 'h-screen w-screen flex flex-col ',
  main: 'h-full w-screen flex-1 z-10',

  rideRequestContainer: `h-full w-[400px] ml-[1rem] py-[3rem] absolute top-0 left-0 flex flex-col justify-end z-20`,
  rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll`,
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
      <div className={style.main}>
        {/* Map */}
        <Map />
      </div>
      <div className={style.rideRequestContainer}>
        {/* Render Request */}
        <div className={style.rideRequest}>
          {/* Location selector */}
          <LocationSelector />
          <Confirm />
        </div>
      </div>
    </div>
  )
}

export default Home
