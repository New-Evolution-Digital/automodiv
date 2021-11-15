import React from 'react'

import { Popover } from '@headlessui/react'
import Link from 'next/link'

import joinClasses from '../../../utils/joinClasses'
import { PopOverMenu } from '../index'
import { useMenuState } from './useMenuState'

const DesktopMenu = () => {
  const { get } = useMenuState(false)
  return (
    <div className="backdrop-blur-md backdrop-filter bg-opacity-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="h-16 flex items-center justify-between">
            {/* Logo (lg+) */}
            <div className="hidden lg:flex-1 lg:flex lg:items-center">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt=""
                />
              </a>
            </div>

            <div className="hidden h-full lg:flex">
              {/* Flyout menus */}
              <Popover.Group className="px-4 bottom-0 inset-x-0">
                <div className="h-full flex justify-center space-x-8">
                  {get.pages.indexPages.map((page) => (
                    <Link key={page.name} href={page.href} passHref>
                      <a className="flex items-center text-sm font-medium text-white">
                        {page.name}
                      </a>
                    </Link>
                  ))}
                  {get.pages.catPages.map((category) => (
                    <Popover key={category.name} className="flex">
                      {() => (
                        <>
                          <div className="relative flex">
                            <Popover.Button className="relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium text-white">
                              {category.name}
                              <span
                                className={joinClasses(
                                  get.open ? 'bg-white' : '',
                                  'absolute -bottom-px inset-x-0 h-0.5 transition ease-out duration-200'
                                )}
                                aria-hidden="true"
                              />
                            </Popover.Button>
                          </div>

                          <PopOverMenu.Panel>
                            {category.featured.map((item) => (
                              <PopOverMenu.MenuItem
                                key={item.name}
                                href="#"
                                linkText={item.name}
                                image={{
                                  src: item.imageSrc,
                                  alt: item.imageAlt
                                }}
                              />
                            ))}
                          </PopOverMenu.Panel>
                        </>
                      )}
                    </Popover>
                  ))}
                </div>
              </Popover.Group>
            </div>

            {/* Mobile menu and search (lg-) */}
            <div className="flex-1 flex items-center lg:hidden">
              {/* <button type="button" className="-ml-2 p-2 text-white" onClick={() => setMobileMenuOpen(true)}> */}
              <span className="sr-only">Open menu</span>
              {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
              {/* </button> */}

              {/* Search */}
              <a href="#" className="ml-2 p-2 text-white">
                <span className="sr-only">Search</span>
                {/* <SearchIcon className="w-6 h-6" aria-hidden="true" /> */}
              </a>
            </div>

            {/* Logo (lg-) */}
            <a href="#" className="lg:hidden">
              <span className="sr-only">Workflow</span>
              <img
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt=""
                className="h-8 w-auto"
              />
            </a>

            <div className="flex-1 flex items-center justify-end">
              <a
                href="#"
                className="hidden text-sm font-medium text-white lg:block"
              >
                Search
              </a>

              <div className="flex items-center lg:ml-8">
                {/* Help */}
                <a href="#" className="p-2 text-white lg:hidden">
                  <span className="sr-only">Help</span>
                  {/* <QuestionMarkCircleIcon className="w-6 h-6" aria-hidden="true" /> */}
                </a>
                <a
                  href="#"
                  className="hidden text-sm font-medium text-white lg:block"
                >
                  Help
                </a>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-8">
                  <a href="#" className="group -m-2 p-2 flex items-center">
                    {/* <ShoppingBagIcon className="flex-shrink-0 h-6 w-6 text-white" aria-hidden="true" /> */}
                    <span className="ml-2 text-sm font-medium text-white">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopMenu
