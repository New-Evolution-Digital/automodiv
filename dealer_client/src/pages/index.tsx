import React, { FC } from 'react'

import { Menu, Nav } from './components'

const index: FC = () => {
  return (
    <div className="bg-white">
      <Menu.MobileMenu />
      <div className="relative bg-gray-900 h-screen">
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

        <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
            Automodiv
          </h1>
          <p className="mt-4 text-xl text-blue-300">
            Helping shoppers find your dealership one transaction at a time. A
            world class dealership platform built by sales driven development
            teams.
          </p>
          <a
            href="#"
            className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default index
