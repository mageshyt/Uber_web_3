import { client } from './Sanity'

//! let create a function that will create a user in our sanity database
interface User {
  userWalletAddress: any
  name: string
}

export const create_User_In_Sanity = async (
  userWalletAddress: any,
  name: string,

) => {
  try {

    //! create a new user in our database
    const userDoc = {
      _type: 'users',
      _id: userWalletAddress,
      name: name,

      walletAddress: userWalletAddress,
    }

    await client.createIfNotExists(userDoc) //! if the user not exist in the database, create it
  } catch (error) {
    console.log(error)
  }
}
