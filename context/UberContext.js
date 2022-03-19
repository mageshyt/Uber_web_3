import { createContext, useEffect, useState } from 'react'

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
  //! to track our pick
  const [pickUp, setPickUp] = useState('')
  //! to track our drop off
  const [dropOff, setDropOff] = useState('')
  //! to track our Pickup coordinates
  const [pickUpCoordinates, setPickUpCoordinates] = useState()
  //! to track our Dropoff coordinates
  const [dropOffCoordinates, setDropOffCoordinates] = useState()

  // ! meta mas
  const createLocationCoordinatePromise = async (
    locationName,
    locationType
  ) => {
    try {
      const data = await getLocationCoordinates(locationName)
      console.log({ data: data })
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
      }}
    >
      {children}
    </UberContext.Provider>
  )
}
