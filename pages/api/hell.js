// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
  const mapboxUrl = `${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}/${req.body.location}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
  res.status(200).json({ name: 'John Doe', a: req.body })
}

export default handler
;`const handler = async (req, res) => {
  console.log({ mapboxUrl })
  try {
    const response = await fetch(mapboxUrl)
    const data = await response.json()

    res.status(200).send({ message: 'success', data: data.features[0].center })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}
`
