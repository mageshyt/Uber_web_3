import { createContext, useEffect, useState } from 'react'
import { CardList } from '../assets/data'
import { faker } from '@faker-js/faker'
import { create_User_In_Sanity } from '../lib/CreateUser'
import { Get_User_Info } from '../lib/GetUserInfo'
import { getDuration } from '../lib/GetDuration'
export const UberContext = createContext()
const getLocationCoordinates = async (location) => {
  const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`

  try {
    const response = await fetch(mapboxUrl)
    const data = await response.json()
    return data
  } catch (error) {
    console.log({ error })
  }
}

export const UberProvider = ({ children }) => {
  // PRICE
  const [selectedRide, setSelectedRide] = useState([])
  const [price, setPrice] = useState()
  const [basePrice, setBasePrice] = useState()
  //! to track our pick
  const [pickUp, setPickUp] = useState('')

  //! to track our drop off
  const [dropOff, setDropOff] = useState('')

  //! to track our Pickup coordinates
  const [pickUpCoordinates, setPickUpCoordinates] = useState()

  //! to track our Dropoff coordinates
  const [dropOffCoordinates, setDropOffCoordinates] = useState()

  //! account
  const [account, setAccount] = useState()
  // ! current user
  const [currentUser, setCurrentUser] = useState()
  // ! meta mask
  let metamask
  if (typeof window !== 'undefined') {
    metamask = window.ethereum
  }
  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  //! request user to get current user info
  useEffect(() => {
    const SetInfo = async () => {
      if (!account) return
      const info = await Get_User_Info(account)
      setCurrentUser(info)
    }
    SetInfo()
  }, [account])

  //! base brice calculate
  useEffect(() => {
    const fetchDuration = async () => {
      if (!pickUpCoordinates || !dropOffCoordinates) return
      const coordinates1 = `${pickUpCoordinates[0].center[0]},${pickUpCoordinates[0].center[1]}`
      const coordinates2 = `${dropOffCoordinates[0].center[0]},${dropOffCoordinates[0].center[1]}`
      const res = await getDuration(coordinates1, coordinates2)
      console.log({ code: res.code })
      if (res.code == 'Ok') {
        console.log('hello')
        const duration = res?.routes[0]?.duration
        setBasePrice(Math.round(duration / 80))
      }
      console.log({ basePrice })
    }
    fetchDuration()
  }, [pickUpCoordinates, dropOffCoordinates])

  //! connect meta mask
  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return //! if we not login then dont do anything
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length > 0) {
        setAccount(addressArray[0])
        //! pick the first account
        //! request the user to create profile on sanity
        requestToCreateUserOnSanity(addressArray[0])
      }
    } catch {
      console.log('error')
    }
  }

  //! connect to wallet
  const connectWallet = async () => {
    if (!window.ethereum) return //! if we not login then dont do anything
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      //! Request user to connect to wallet
      if (addressArray.length > 0) {
        setAccount(addressArray[0]) //! pick the first account
        //! request the user to create profile on sanity
        requestToCreateUserOnSanity(addressArray[0])
      }
    } catch {
      console.log('error')
    }
  }

  const createLocationCoordinatePromise = async (
    locationName,
    locationType
  ) => {
    try {
      const data = await getLocationCoordinates(locationName)
      switch (locationType) {
        case 'pickup':
          setPickUpCoordinates(data.features)
          break
        case 'dropoff':
          setDropOffCoordinates(data.features)
          break
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (pickUp && dropOff) {
      console.log('pickUp', pickUp)
      ;(async () => {
        await Promise.all([
          createLocationCoordinatePromise(pickUp, 'pickup'),
          createLocationCoordinatePromise(dropOff, 'dropoff'),
        ])
      })()
    } else return
  }, [pickUp, dropOff])

  //! if we dont have then account then we will create the profile in sanity
  const requestToCreateUserOnSanity = async (address = account) => {
    if (!window.ethereum) return
    try {
      const name = faker.name.findName()
      create_User_In_Sanity(address, name)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <UberContext.Provider
      value={{
        pickUp,
        dropOff,
        setPickUp,
        setDropOff,
        setPickUpCoordinates,
        setDropOffCoordinates,
        pickUpCoordinates,
        dropOffCoordinates,
        connectWallet,
        account,
        currentUser,
        setSelectedRide,
        price,
        setPrice,
        selectedRide,
        setPrice,
        basePrice,
        setBasePrice,
      }}
    >
      {children}
    </UberContext.Provider>
  )
}
