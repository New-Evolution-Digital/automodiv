import { FC } from 'react'

import { NavLink, Outlet } from 'react-router-dom'

import style from './index.module.scss'

export const PublicDealer: FC = () => {
  return (
    <div className={style.pageWrapper}>
      <nav className={style.landingNav}>
        <NavLink to="/">Automodiv</NavLink>
        <div className={style.navGroup}>
          <NavLink to="/dealer">Home</NavLink>
          <NavLink to="/dealer/join">Register A Dealer</NavLink>
          <NavLink to="/dealer/login">Login</NavLink>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
