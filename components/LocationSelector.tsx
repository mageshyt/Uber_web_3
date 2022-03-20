import React, { useContext, useState } from 'react'
import { UberContext } from '../context/UberContext'
const style = {
  wrapper: 'pt-2',
  SearchHeader:
    'text-2xl w-full flex items-center overflow-hidden text-left p-4 text-black font-bold',
  inputBoxs: 'flex flex-col mb-4 relative',
  inputBox: `h-10 mx-4 border-2 bg-[#eeeeee] flex items-center my-1 py-1 px-2`,
  focusedInputBox: `border-black`,
  svgContainer: `mx-1`,
  input: `my-2 rounded-2 p-2 outline-none border-none bg-transparent  h-full w-full`,
  verticalLine: `w-0 h-[2rem] border-black border absolute z-10 left-[2.3rem] top-[2rem]`,
}
const LocationSelector = () => {
  //! use contextual
  const { pickUp, dropOff, setPickUp, setDropOff } = useContext(UberContext)
  //! to track the focus of the input box
  const [inFocus, setInFocus] = useState('from')
  //! to track the pick up
  return (
    <div className={style.wrapper}>
      {/* Search header */}
      <div className={style.SearchHeader}>
        {inFocus === 'from' ? 'Where can we pick you up ?' : 'Where To ?'}
      </div>
      {/* Input boxs */}
      <div className={style.inputBoxs}>
        <div
          className={`${style.inputBox} ${
            inFocus === 'from' && style.focusedInputBox
          }`}
        >
          <div className={style.svgContainer}>
            <svg viewBox="0 0 24 24" width="1em" height="1em">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 14a2 2 0 100-4 2 2 0 000 4zm5-2a5 5 0 11-10 0 5 5 0 0110 0z"
              />
            </svg>
          </div>
          {/* Input box 1 */}
          {/* From place         */}
          <input
            value={pickUp}
            onChange={(e) => setPickUp(e.target.value)}
            onFocus={() => setInFocus('from')}
            className={style.input}
            type="text"
            placeholder="Enter Pickup location"
          />
        </div>
        {/* vertical line */}
        <div className={style.verticalLine}></div>
        {/* Input Box -2 */}
        <div
          className={`${style.inputBox} ${
            inFocus === 'to' && style.focusedInputBox
          }`}
        >
          <div className={style.svgContainer}>
            <svg viewBox="0 0 24 24" width="1em" height="1em">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 10h-4v4h4v-4zM7 7v10h10V7H7z"
              />
            </svg>
          </div>
          {/* To place */}
          <input
            className={style.input}
            placeholder="Where to?"
            value={dropOff}
            onChange={(e) => setDropOff(e.target.value)}
            onFocus={() => setInFocus('to')}
          />
        </div>
      </div>
    </div>
  )
}

export default LocationSelector
