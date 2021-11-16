import React, { FC } from 'react'

import { Menu, Nav } from '../components'

interface PublicProps {
  heroOverlay?: React.ReactNode
}

const Public: FC<PublicProps> = ({ children, heroOverlay }) => {
  return (
    <div className="bg-white">
      <Menu.MobileMenu />
      <div className="relative bg-gray-900">
        {!!heroOverlay && heroOverlay}
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
