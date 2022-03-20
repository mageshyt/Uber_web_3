import React, { useContext } from 'react'
import Skeleton from 'react-loading-skeleton'
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
    metamask,
  } = useContext(UberContext)
  // Loading
  const [loading, setLoading] = React.useState<boolean>(true)
  const [Active, setActive] = React.useState<boolean>(false)
  const SendTransaction = async () => {
    try {
      await metamask.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: account,
            to: '0x9a9e6793880041ca39122C97260fBb70B7C254D8',
          },
        ],
      })
    } catch (err) {
      console.log(err)
    }
  }
  const storeTripDetail = async () => {
    Set_Trip_Details(pickUp, dropOff, account, price, selectedRide.service)
    await SendTransaction()
    setLoading(false)
  }
  if (loading) {
    console.log('done')
  } else {
    console.log('processing')
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
            onClick={() => {
              storeTripDetail()
              setActive(false)
            }}
            className={style.confirmButton}
          >
            <>Confirm {selectedRide.service || 'Uber X'}</>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
