import React, { FC, Fragment } from 'react'

import { Popover, Transition } from '@headlessui/react'

const Panel: FC = ({ children }) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
        <div
          className="absolute inset-0 top-1/2 bg-white shadow"
          aria-hidden="true"
        />

        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-y-10 gap-x-8 py-16">
              {children}
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  )
}

export default Panel
