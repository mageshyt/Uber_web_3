import Image from 'next/image'
import { BsPersonFill } from 'react-icons/bs'
import React from 'react'
import Logo from '../../assets/logo.jpg'
const style = {
  rightMenu: 'flex gap-3 px-12 items-center',
  navItems:
    'text-white text-lg font-medium flex items-center mx-4 cursor-pointer',
  userImageContainer: ' mr-2 ',
  userImage: 'h-10 w-10 mr-4 rounded-full p-px cursor-pointer object-cover',
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
  loginText: `ml-2`,
}

interface Props {
  currentAccount: string
  connectWallet: () => void
  name: string
}
export const RightMenu = ({ name, currentAccount, connectWallet }: Props) => {
  return (
    <div className={style.rightMenu}>
      {/* Menu Items */}
      {/* Help */}
      <div className={style.navItems}>Help</div>
      {/* use name */}
      <div className={style.navItems}>{name}</div>
      {/* Profile pic */}
      <div className={style.userImageContainer}>
        <Image className={style.userImage} src={Logo} height={40} width={40} />
      </div>
      {/* Wallet address */}
      {currentAccount ? (
        <div>
          {currentAccount.slice(0, 6) + '...' + currentAccount.slice(39)}
        </div>
      ) : (
        <div onClick={() => connectWallet()} className={style.loginButton}>
          <BsPersonFill />
          <div className={style.loginText}>Please Login !</div>
        </div>
      )}
    </div>
  )
}
