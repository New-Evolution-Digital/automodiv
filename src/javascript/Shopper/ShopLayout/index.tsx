import { FC } from 'react'

import { NavLink, Outlet } from 'react-router-dom'

import style from './index.module.scss'

const ShopLayout: FC = () => {
  return (
    <div className={style.pageWrapper}>
      <nav className={style.landingNav}>
        <NavLink className="px-10" to="/">
          Automodiv
        </NavLink>
        <div className={style.navGroup}>
          <NavLink className="px-10" to="/shopper">
            Home
          </NavLink>
          <NavLink className="px-10" to="/shopper/join">
            Register
          </NavLink>
          <NavLink className="px-10" to="/shopper/login">
            Login
          </NavLink>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default ShopLayout
