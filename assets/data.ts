import UberX from './rides/UberX.png'
import UberBlack from './rides/uberBlack.png'
import UberBlackSuv from './rides/uberBlackSuv.png'
import UberSelect from './rides/uberSelect.png'
import UberXL from './rides/uberXL.png'

interface CarCard {
  name: string
  image: any
  priceMultiplier: number
}
const uberXCard: CarCard = {
  name: 'UberX',
  image: UberX,
  priceMultiplier: 1.3,
}
const uberBlackCard: CarCard = {
  name: 'UberBlack',
  image: UberBlack,
  priceMultiplier: 2.3,
}
const uberBlackSuvCard: CarCard = {
  name: 'UberBlackSuv',
  image: UberBlackSuv,
  priceMultiplier: 1.8,
}
const uberSelectCard: CarCard = {
  name: 'UberSelect',
  image: UberSelect,
  priceMultiplier: 1.6,
}
const uberXLCard: CarCard = {
  name: 'UberXL',
  image: UberXL,
  priceMultiplier: 1.5,
}

export const CardList = [
  uberXCard,
  uberBlackCard,
  uberBlackSuvCard,
  uberSelectCard,
  uberXLCard,
]
