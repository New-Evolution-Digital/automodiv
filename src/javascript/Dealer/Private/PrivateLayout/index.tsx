import { FC } from 'react'

import { NavLink, Outlet } from 'react-router-dom'

import style from './index.module.scss'

interface Props {
  logout(): void
}

export const PrivateDealer: FC<Props> = ({ logout }) => {
  return (
    <div className={style.pageWrapper}>
      <nav className={style.landingNav}>
        <NavLink to="/">Automodiv</NavLink>
        <div className={style.navGroup}>
          <NavLink to="/dealer">Home</NavLink>
          <button onClick={logout}>Logout</button>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
