import React, { useContext } from 'react'
import { UberContext } from '../context/UberContext'
import { Set_Trip_Details } from '../lib/SaveTrips'
import RiderSelector from './RiderSelector'
const style = {
  wrapper: `flex-1 h-full flex flex-col justify-between`,
  rideSelectorContainer: `h-full flex flex-col overflow-scroll`,
  confirmButtonContainer: ` border-t-2 cursor-pointer z-10`,
  confirmButton: `bg-black text-white m-4 py-4 text-center text-xl`,
}
const Confirm = () => {
  //! to get tip detail
  const {
    account,
    pickUp,
    dropOff,
    price,
    selectedRide,
    pickUpCoordinates,
    dropOffCoordinates,
  } = useContext(UberContext)

  const storeTripDetail = async () => {
    Set_Trip_Details(pickUp, dropOff, account, price, selectedRide.service)
  }
  return (
    <div className={style.wrapper}>
      {/* For selecting the rider */}
      <div className={style.rideSelectorContainer}>
        {pickUpCoordinates && dropOffCoordinates && <RiderSelector />}
      </div>
      {/* conform the trip */}
      <div className={style.confirmButtonContainer}>
        <div className={style.confirmButtonContainer}>
          <div
            onClick={() => storeTripDetail()}
            className={style.confirmButton}
          >
            Confirm {selectedRide.service || 'Uber X'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
