import { FC } from 'react'

import { NavLink, Outlet } from 'react-router-dom'

const ShopNav: FC = () => {
  return (
    <div className="flex w-screen h-auto justify-evenly">
      <nav className="flex">
        <NavLink className="px-10" to="/">
          Automodiv
        </NavLink>
        <div className="flex justify-self-end justify-between">
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

export default ShopNav
