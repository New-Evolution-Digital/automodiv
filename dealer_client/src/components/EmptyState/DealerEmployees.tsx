import Link from 'next/link'
import React from 'react'

const DealerEmployees = () => {
  return (
    <div className="py-6 text-gray-700 text-2xl">
      <img
        className="block max-w-xs mx-auto my-8"
        src="https://res.cloudinary.com/automodiv/image/upload/v1637738373/assets/web_dev_mdsvl3.png"
      />
      <p>No employees have been added</p>
      <Link href="/dealership/employee/add" passHref>
        <a>Click Here to set up a new employee</a>
      </Link>
    </div>
  )
}

export default DealerEmployees
