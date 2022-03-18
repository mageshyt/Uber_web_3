import Image from 'next/image'
import React from 'react'
import ethLogo from '../assets/eth-logo.png'
import { CardList } from '../assets/data'
const style = {
  wrapper: `h-full flex select-none flex-col`,
  title: `text-gray-500 text-center text-xs py-2 border-b`,
  carList: `flex flex-col flex-1 overflow-scroll`,
  car: `flex p-3 m-2 items-center border-2 border-white`,
  selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
  carImage: `h-14`,
  carDetails: `ml-2 flex-1`,
  service: `font-medium`,
  time: `text-xs text-blue-500 `,
  priceContainer: `flex space-x-2 items-center`,
  price: `mr-[-0.8rem]`,
}
const RiderSelector = () => {
  const basePrice: number = 154
  return (
    <div className={style.wrapper}>
      {/* title */}
      <div className={style.title}>Choose a ride, or swipe up for more </div>
      {/* car list */}
      <div className={style.carList}>
        {CardList.map((car, index) => {
          return (
            <div className={style.car} key={index}>
              {/* Car image */}
              <Image
                className={style.carImage}
                height={50}
                width={50}
                src={car.image}
              />
              {/* Car details */}
              <div className={style.carDetails}>
                <div className={style.service}>{car.name}</div>
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
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RiderSelector
