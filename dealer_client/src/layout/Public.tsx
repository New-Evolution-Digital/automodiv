import React, { FC } from 'react'

import { Menu, Nav } from '../components'
import joinClasses from '../utils/joinClasses'

interface PublicProps {
  heroOverlay?: React.ReactNode
  hero?: React.ReactNode
  children?: React.ReactChild
}

const Public: FC<PublicProps> = ({ children, heroOverlay, hero }) => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Menu.MobileMenu />
      <div className={joinClasses('relative', !children ? 'h-screen' : '')}>
        {!!heroOverlay && heroOverlay}
        {/* Navigation */}
        <header className="relative z-10">
          <nav aria-label="Top">
            {/* Top navigation */}
            <Nav.AuthBar />
            <Menu.DesktopMenu light={!heroOverlay} />
          </nav>
        </header>
        {hero}
      </div>
      {children}
    </div>
  )
}

export default Public
