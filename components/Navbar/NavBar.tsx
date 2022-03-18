import { RightMenu } from './RightMenu'
import { LeftMenu } from './LeftMenu'
import { NextPage } from 'next'
import React from 'react'

const style = {
  wrapper:
    'h-16 w-full flex md:justify-around items-center px-60 bg-black text-white',
}
// ! Current Account

const currentAccount = '0x62fC3d123389b25c36876C277F158E1d94a18E9b'
const NavBar: NextPage = () => {
  return (
    <div className={style.wrapper}>
      {/* Left menu */}
      <LeftMenu />
      {/* RightMenu */}
      <RightMenu currentAccount={currentAccount} />
    </div>
  )
}

export default NavBar
