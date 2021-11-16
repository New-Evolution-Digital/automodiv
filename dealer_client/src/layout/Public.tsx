import React, { FC } from 'react'

import { Menu, Nav } from '../components'

const Public: FC = ({ children }) => {
  return (
    <div className="bg-white">
      <Menu.MobileMenu />
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            // src="https://images.unsplash.com/photo-1606423258821-621996281c0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            src="https://images.unsplash.com/photo-1634981297356-f9b4daa98a92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            alt="Care Dealership with people shopping in the corner"
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-50"
        />

        {/* Navigation */}
        <header className="relative z-10">
          <nav aria-label="Top">
            {/* Top navigation */}
            <Nav.AuthBar />
            <Menu.DesktopMenu />
          </nav>
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Public
