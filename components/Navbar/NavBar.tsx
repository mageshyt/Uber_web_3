import { RightMenu } from './RightMenu'
import { LeftMenu } from './LeftMenu'
import { NextPage } from 'next'
import React, { useContext } from 'react'
import { UberContext } from '../../context/UberContext'
const style = {
  wrapper:
    'h-18 py-2 w-full flex md:justify-around items-center px-60 bg-black text-white',
}
// ! Current Account

const currentAccount = '0x62fC3d123389b25c36876C277F158E1d94a18E9b'
const NavBar: NextPage = () => {
  const { account, connectWallet, currentUser } = useContext(UberContext)

  return (
    <div className={style.wrapper}>
      {/* Left menu */}
      <LeftMenu />
      {/* RightMenu */}
      <RightMenu
        currentAccount={currentUser?.walletAddress}
        name={currentUser?.name}
        connectWallet={connectWallet}
      />
    </div>
  )
}

export default NavBar
