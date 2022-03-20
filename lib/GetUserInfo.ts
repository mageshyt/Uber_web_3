import { client } from './Sanity'

//! Query to fetch user info
interface User {
  userWalletAddress: any
}
export const Get_User_Info = async (userWalletAddress: User) => {
  try {
    const Query = `

        *[_type =='users' && walletAddress=="${userWalletAddress}"]{
            name,
            walletAddress,
        }
    `
    const result = await client.fetch(Query)
    return result[0]
  } catch (error) {
    console.log(error)
  }
}
