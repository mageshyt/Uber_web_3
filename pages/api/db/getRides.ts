import { client } from '../../../lib/Sanity'

const query: string = `     
*[_type =='rides']{
"service":title,
       "image":icon.asset->url,
       priceMultiplier,
       orderById,
} | order(orderById asc)`

const getRideTypes = async (req: any, res: any) => {
  try {
    const sanityResponse = await client.fetch(query)
    res.status(200).send({ message: 'success', data: sanityResponse })
  } catch (err: any) {
    res.status(500).send({ message: 'error', data: err.message })
  }
}

export default getRideTypes
