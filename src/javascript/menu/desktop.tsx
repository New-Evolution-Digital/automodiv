import React, { FC } from 'react'

import { Popover } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'
import Link from 'next/link'

import joinClasses from '../../utils/joinClasses'
import { Panel, MenuItem } from '../PopOverMenu'
import { useMenuState } from './useMenuState'

interface IDesktopMenu {
  light?: boolean
}

const DesktopMenu: FC<IDesktopMenu> = ({ light }) => {
  const { get, set } = useMenuState(false)

  return (
    <div
      className={joinClasses(
        'backdrop-blur-md backdrop-filter bg-opacity-10 bg-white',
        light ? 'shadow-md' : ''
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="h-16 flex items-center justify-between">
            {/* Logo (lg+) */}
            <div className="hidden lg:flex-1 lg:flex lg:items-center">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto"
                  src={`https://tailwindui.com/img/logos/workflow-mark.svg?color=${
                    light ? 'black' : 'white'
                  }`}
                  alt=""
                />
              </a>
            </div>

            <div className="hidden h-full lg:flex">
              {/* Flyout menus */}
              <Popover.Group className="bottom-0 inset-x-0">
                <div className="h-full flex justify-center space-x-8">
                  {get.pages.indexPages.map((page) => (
                    <Link key={page.name} href={page.href} passHref>
                      <a
                        className={joinClasses(
                          'flex items-center text-sm font-medium',
                          light ? 'text-gray-900' : 'text-white'
                        )}
                      >
                        {page.name}
                      </a>
                    </Link>
                  ))}
                  {get.pages.catPages.map((category) => (
                    <Popover key={category.name} className="flex">
                      {() => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={joinClasses(
                                'relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium',
                                light ? 'text-gray-900' : 'text-white'
                              )}
                            >
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

                          <Panel>
                            {category.featured.map((item) => (
                              <MenuItem
                                key={item.name}
                                href="#"
                                linkText={item.name}
                                image={{
                                  src: item.imageSrc,
                                  alt: item.imageAlt
                                }}
                              />
                            ))}
                          </Panel>
                        </>
                      )}
                    </Popover>
                  ))}
                </div>
              </Popover.Group>
            </div>

            {/* Mobile menu and search (lg-) */}
            <div className="flex-1 flex items-center lg:hidden">
              <button
                type="button"
                className="-ml-2 p-2 text-white"
                onClick={() => set.open(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopMenu
