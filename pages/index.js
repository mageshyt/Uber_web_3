import Head from 'next/head'
import Confirm from '../components/Confirm'
import LocationSelector from '../components/LocationSelector'
import Map from '../components/Map/Map'
import NavBar from '../components/Navbar/NavBar'

const style = {
  wrapper: 'h-screen w-screen flex flex-col overflow-y-screen ',
  main: 'h-full w-screen flex-1 z-10',

  rideRequestContainer: `h-full w-[400px]   py-[3rem]  absolute top-0 ml-[2rem]  z-1 lg:mt-[20px]  left-0  flex flex-col justify-end z-20`,
  rideRequest: ` max-h-[600px] bg-white rounded-lg flex flex-col overflow-scroll`,
}
const Home = () => {
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
