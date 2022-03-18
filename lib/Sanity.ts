import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '3kyod4wb',
  dataset: 'production',
  apiVersion: 'v1',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})
