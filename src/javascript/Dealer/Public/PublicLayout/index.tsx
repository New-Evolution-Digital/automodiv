import { FC } from 'react'

import { NavLink, Outlet } from 'react-router-dom'

export const PublicDealer: FC = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Automodiv</NavLink>
        <div>
          <NavLink to="/dealer">Home</NavLink>
          <NavLink to="/dealer/join">Register A Dealer</NavLink>
          <NavLink to="/dealer/login">Login</NavLink>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}
