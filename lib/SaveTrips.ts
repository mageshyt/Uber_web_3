import { client } from './Sanity'

interface TripDetails {
  pickup: string
  dropoff: string
  userWalletAddress: string
}
export const Set_Trip_Details = async (
  pickup: string,
  dropoff: string,
  userWalletAddress: string,
  price: any,
  selectedRide: any
) => {
  try {
    const tripDoc = {
      _type: 'trips',
      _id: `${userWalletAddress}-${Date.now()}`,
      pickup,
      dropoff,
      price: parseFloat(price),
      rideCategory: selectedRide,
      rideTimestamp: new Date(Date.now()).toISOString(),
      //   Passenger
      passenger: {
        _key: `passenger-${userWalletAddress} - ${new Date(
          Date.now()
        ).toISOString()}`,
        _ref: userWalletAddress,
        _type: 'reference',
      },
    }
    console.log(tripDoc)
    await client.createIfNotExists(tripDoc)
  } catch (error) {
    console.log(error)
  }
}
