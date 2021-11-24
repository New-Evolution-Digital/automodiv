import React, { FC } from 'react'

import { Disclosure } from '@headlessui/react'
import { useRouter } from 'next/router'

import joinClasses from '../utils/joinClasses'

const navigation: LinkTypes[] = [
  { name: 'Home', href: '/' },
  { name: 'Settings', href: '/settings' }
]

interface IDashboard {
  dashboardTitle?: string
}

const Dashboard: FC<IDashboard> = ({
  children,
  dashboardTitle = 'Dashboard'
}) => {
  const { pathname } = useRouter()
  return (
    <div className="min-h-screen flex flex-col">
      {/* NavBar */}
      <Disclosure as="nav" className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={`${pathname}/${item.href}`}
                      className={joinClasses(
                        item.name === pathname
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{dashboardTitle}</h1>
        </div>
      </header>
      <main className="h-full py-6 sm:px-6 lg:px-8 flex-grow">{children}</main>
      <footer className="bg-gray-800 flex-shrink">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-white">Automodiv</p>
        </div>
      </footer>
    </div>
  )
}

export default Dashboard
