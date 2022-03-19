const getLocationCoordinates = async (locationName) => {
  console.log({ locationName })
  const mapboxUrl = `${process.env.MAPBOX_PLACES_API_URL}/${locationName}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
  // console.log({ mapboxUrl })
  try {
    const response = await fetch(mapboxUrl)
    const data = await response.json()
    console.log({ data })
  } catch (error) {}
}
