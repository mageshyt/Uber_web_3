export const getDuration = async (
  pickupCoordinates: any,
  dropoffCoordinates: any
) => {
  const mapboxUrl = `${process.env.NEXT_PUBLIC_MAP_BOX_DIRECTION_API_URL}/${pickupCoordinates};${dropoffCoordinates}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
  try {
    const response = await fetch(mapboxUrl)
    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}
