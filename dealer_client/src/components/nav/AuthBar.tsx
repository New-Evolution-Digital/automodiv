import React from 'react'

import Link from 'next/link'

const AuthBar = () => {
  return (
    <div className="bg-gray-900">
      <div className="container-desktop w-full flex">
        <div className="flex-grow" />
        <div className="h-10 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/login" passHref>
              <a className="text-sm font-medium text-white hover:text-gray-100">
                Sign in
              </a>
            </Link>
            <Link href="/join/account" passHref>
              <a className="text-sm font-medium text-white hover:text-gray-100">
                Create New Organization
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthBar
