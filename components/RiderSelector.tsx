import Image from 'next/image'
import React, { useContext, useEffect } from 'react'
import ethLogo from '../assets/eth-logo.png'
// import { CardList } from '../assets/data'
import { client } from '../lib/Sanity'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { UberContext } from '../context/UberContext'
const style = {
  wrapper: `h-full flex select-none flex-col`,
  title: `text-gray-500 text-center text-xs py-2 border-b`,
  carList: `flex flex-col flex-1 overflow-scroll`,
  car: `flex p-3 m-2 items-center border-2 border-white`,
  selectedCar: `border-2 border-black flex p-3 m-2  items-center`,
  carImage: `h-14`,
  carDetails: `ml-2 flex-1`,
  service: `font-medium`,
  time: `text-xs text-blue-500 `,
  priceContainer: `flex space-x-2 items-center`,
  price: `mr-[-0.8rem]`,
}

const query: string = `     
*[_type =='rides']{
"service":title,
       "image":icon.asset->url,
       priceMultiplier,
       orderById,
} | order(orderById asc)`

// const basePrice: number = 154
const RiderSelector = () => {
  const { setSelectedRide, selectedRide, setPrice, basePrice, setBasePrice } =
    useContext(UberContext)
  //! Track out data
  const [CardList, setCardList] = React.useState<any>([])
  // ! track our loading
  const [loading, setLoading] = React.useState<boolean>(true)
  // ! fetching our data
  useEffect(() => {
    const fetchData = async () => {
      const res = client.fetch(query)
      const data = await res
      setCardList(data)
      setSelectedRide(data[0])
    }
    fetchData()
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className={style.wrapper}>
      {/* title */}
      <div className={style.title}>Choose a ride, or swipe up for more </div>
      {/* car list */}
      <div className={style.carList}>
        {CardList.map((car: any, index: number) => {
          return (
            <div
              onClick={() => {
                setSelectedRide(car)
                setPrice(
                  ((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)
                )
              }}
              className={`${
                selectedRide.service === car.service
                  ? style.selectedCar
                  : style.car
              }`}
              key={index}
            >
              {loading ? (
                <Skeleton height={70} width={350} />
              ) : (
                <>
                  {/* Car image */}
                  <Image
                    className={style.carImage}
                    height={50}
                    width={50}
                    src={car?.image}
                  />
                  {/* Car details */}
                  <div className={style.carDetails}>
                    <div className={style.service}>{car?.name}</div>
                    {/* time */}
                    <div className={style.time}>15min away</div>
                  </div>
                  {/* price */}
                  <div className={style.priceContainer}>
                    <div className={style.price}>
                      {' '}
                      {((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)}
                    </div>
                    {/* Image */}
                    <div>
                      <Image src={ethLogo} height={25} width={40} />
                    </div>
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RiderSelector
