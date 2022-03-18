import { NextPage } from 'next'
const style = {
  leftMenu: 'flex gap-3',
  logo: 'text-3xl text-white flex mr-16 cursor-pointer',
  navItems:
    'text-white text-lg font-medium flex items-center mx-4 cursor-pointer',
}
export const LeftMenu: NextPage = ({}) => {
  return (
    <div className={style.leftMenu}>
      {/* logo */}
      <div className={style.logo}>Uber</div>
      {/* nav items */}
      <NavItems />
    </div>
  )
}
const NavItems = ({}) => {
  return (
    <>
      <div className={style.navItems}>Ride</div>
      <div className={style.navItems}>Drive</div>
      <div className={style.navItems}>More</div>
    </>
  )
}
