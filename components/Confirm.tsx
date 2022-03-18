import React from 'react'
const style = {
  wrapper: `flex-1 h-full flex flex-col justify-between`,
  rideSelectorContainer: `h-full flex flex-col overflow-scroll`,
  confirmButtonContainer: ` border-t-2 cursor-pointer z-10`,
  confirmButton: `bg-black text-white m-4 py-4 text-center text-xl`,
}
const Confirm = () => {
  //! to get tip detail
  const storeTripDetail = () => {}
  return (
    <div className={style.wrapper}>
      {/* For selecting the rider */}
      <div className={style.rideSelectorContainer}></div>
      {/* conform the trip */}
      <div className={style.confirmButtonContainer}>
        <div className={style.confirmButtonContainer}>
          <div onClick={() => storeTripDetail} className={style.confirmButton}>
            Confirm
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
