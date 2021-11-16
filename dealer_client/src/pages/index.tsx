import React, { FC } from 'react'

import { Public } from '../layout'

const index: FC = () => {
  return (
    <Public>
      <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
        <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
          Automodiv
        </h1>
        <p className="mt-4 text-xl text-white">
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
    </Public>
  )
}

export default index
