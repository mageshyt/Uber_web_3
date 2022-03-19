import { useEffect, useContext } from 'react'
import mapboxgl from 'mapbox-gl'
import { UberContext } from '../../context/UberContext'

const style = {
  wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const Map = () => {
  const { pickUpCoordinates, dropOffCoordinates } = useContext(UberContext)
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    })
    console.log({ cod: pickUpCoordinates })

    if (pickUpCoordinates) {
      addToMap(map, pickUpCoordinates[0].center)
    }

    if (dropOffCoordinates) {
      addToMap(map, dropOffCoordinates[0].center)
    }

    if (pickUpCoordinates && dropOffCoordinates) {
      map.fitBounds(
        [dropOffCoordinates[0].center, pickUpCoordinates[0].center],
        {
          padding: 400,
        }
      )
    }
  }, [pickUpCoordinates, dropOffCoordinates])

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
    const marker2 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
  }

  return <div className={style.wrapper} id="map" />
}

export default Map
