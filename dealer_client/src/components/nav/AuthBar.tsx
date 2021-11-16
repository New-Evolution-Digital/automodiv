import React from 'react'

const AuthBar = () => {
  return (
    <div className="bg-gray-900">
      <div className="container-desktop w-full flex">
        <div className="flex-grow" />
        <div className="h-10 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-sm font-medium text-white hover:text-gray-100"
            >
              Sign in
            </a>
            <a
              href="#"
              className="text-sm font-medium text-white hover:text-gray-100"
            >
              Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthBar
