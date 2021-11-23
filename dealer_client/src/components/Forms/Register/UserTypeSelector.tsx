import React, { FC } from 'react'

import { CheckIcon } from '@heroicons/react/outline'

import { Panel, Pill } from '../../library'

const RootFeatures = [
  'Root access to all doors within organization',
  'Can do all the things an admin could do',
  'Special admin dashboard to manage everything from sales to kpis'
]
const MemberFeatures = [
  'Can only do sales person task',
  'Cant do anything that your manager is able to approve...unless your manager lets you (thats a different story)'
]

interface UserTypeSelectorType {
  setUserType: () => void
}

const UserTypeSelector: FC<UserTypeSelectorType> = ({ setUserType }) => {
  return (
    <div>
      <div className="text-center max-w-3xl space-y-2 lg:max-w-none">
        <h2 className="text-lg leading-6 font-semibold uppercase tracking-wider">
          Account Type
        </h2>
        <p className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          Which account type is right for you?
        </p>
        <p className="text-xl">
          Before creating a new organization, consider your role in your
          company.
        </p>
      </div>
      <div className="mt-8 flex justify-evenly space-x-4 max-w-md mx-auto lg:max-w-5xl ;g:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0 lg:grid-rows-1">
        <Panel className="w-full flex flex-col shadow-lg">
          <Pill>Root User</Pill>
          <div className="mt-4 flex items-baseline text-6xl font-extrabold">
            Boss Account
          </div>
          <p className="mt-5 text-lg text-gray-800">
            Usually the one who pays the bills. The root user the account that
            will set up your organization, manage employee permissions, and
            more.
          </p>
          <div className="flex-1 flex flex-col justify-between px-6 p5-6 pb-8 space-y-6 sm:p-10 sm:pt-6">
            <ul className="space-y-4">
              {RootFeatures.map((desc, i) => (
                <li key={`root-desc-${i + 1}`} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-6 w-6 text-green-500" />
                  </div>
                  <p>{desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md shadow cursor-default">
            <span
              className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 transition-colors duration-150 cursor-default"
              onClick={() => setUserType()}
            >
              Root Account
            </span>
          </div>
        </Panel>
        <Panel className="w-full flex flex-col shadow-lg">
          <Pill>Member</Pill>
          <div className="mt-4 flex items-baseline text-6xl font-extrabold">
            Sales Account
          </div>
          <p className="mt-5 text-lg text-gray-800">
            Master of all things sales. doesn&rsquo;t need to worry overrides,
            issues, managing people, or other tedious task.
            <strong>
              This will not create a new organization. An authorization code is
              required.
            </strong>
          </p>
          <div className="flex-1 flex flex-col justify-between px-6 p5-6 pb-8 space-y-6 sm:p-10 sm:pt-6">
            <ul className="space-y-4">
              {MemberFeatures.map((desc, i) => (
                <li key={`root-desc-${i + 1}`} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-6 w-6 text-green-500" />
                  </div>
                  <p>{desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md shadow cursor-default">
            <span
              className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 transition-colors duration-150 cursor-default"
              onClick={() => setUserType()}
            >
              Member
            </span>
          </div>
        </Panel>
      </div>
    </div>
  )
}

export default UserTypeSelector
