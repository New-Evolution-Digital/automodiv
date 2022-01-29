import React, { FC, useState } from 'react'

import { LockClosedIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Router from 'next/router'

import { useLoginMutation } from '../generated/types'
import { Public } from '../layout'

const Login: FC = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [login] = useLoginMutation()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!credentials.email || !credentials.password) {
      return
    }
    await login({ variables: { login: credentials } }).then(({ data }) => {
      if (data) {
        localStorage.setItem(
          'organization',
          data.login.user.dealershipOrganization.key
        )
        Router.replace(`/dealership`)
      }
    })
  }

  return (
    <Public>
      <div className="relative flex-auto flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="text-center text-3xl font-extralight text-gray-500">
              Login to you dealer account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email-address"
                  autoComplete="email"
                  required
                  value={credentials.email}
                  onChange={handleOnChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  value={credentials.password}
                  onChange={handleOnChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link href="#" passHref>
                  <a className="font-medium text-blue-600 hover:text-blue-500">
                    Forgot your password?
                  </a>
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                    aria-hidden="true"
                  />
                </span>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </Public>
  )
}

export default Login
