import React, { ChangeEvent, FC, FormEvent, Fragment, useState } from 'react'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/outline'
import { useNavigate } from 'react-router-dom'

import { Label } from 'javascript/library'

import { useAddEmployeeByOrgKeyMutation } from '../../../generated/types'
import { Dashboard } from '../../../layout'
import joinClasses from '../../../utils/joinClasses'

interface RoleType {
  id: number
  value: string
  name: string
  description: string
}

const roles: RoleType[] = [
  {
    id: 1,
    value: 'admin',
    name: 'Admin',
    description:
      'User who is able to add employees to an organization, can manage all employees'
  },
  {
    id: 2,
    value: 'manager',
    name: 'Manager',
    description:
      'User is able to control user abilities internally within their assigned door'
  },
  {
    id: 3,
    value: 'employee',
    name: 'Employee',
    description: 'User is limited to adding & updating inventory'
  }
]

const Add: FC = () => {
  const [params, setParams] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: ''
  })

  const [role, setRole] = useState<RoleType>(
    () =>
      roles[0] || {
        id: 1,
        value: 'admin',
        name: 'Admin',
        description:
          'User who is able to add employees to an organization and can manage all employees'
      }
  )
  const navigate = useNavigate()
  const orgKey = localStorage.getItem('organization') || ''
  const [add] = useAddEmployeeByOrgKeyMutation()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParams({ ...params, [e.target.name]: e.target.value })
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()

    if (!role || role?.value === undefined) {
      return
    }

    add({
      variables: {
        Credentials: {
          firstName: params.firstName,
          lastName: params.lastName,
          username: params.username,
          email: params.email
        },
        EmployeeRole: role.value,
        Key: orgKey
      }
    }).then(() => {
      navigate('/dealership')
    })
  }

  return (
    <Dashboard dashboardTitle="New Door">
      <div className="max-w-7xl mx-auto relative px-2 sm:px-2 lg:px-8">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Employee Profile
              </h3>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={submit}>
              <div className="shadow sm:rounded-md">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <Label className="sr-only">Employee First Name</Label>
                      <div className="flex rounded-md shadow-sm">
                        <input
                          type="text"
                          placeholder="First Name"
                          name="firstName"
                          value={params.firstName}
                          onChange={handleChange}
                          className="focus:ring-blue-700 focus:border-blue-700 focus:outline-none border-gray-500 block w-full rounded-md sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <Label className="sr-only">Employee Last Name</Label>

                      <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={params.lastName}
                        onChange={handleChange}
                        className="focus:ring-blue-700 focus:border-blue-700 focus:outline-none border-gray-500 block w-full rounded-md sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="grid grid-cols-3 gap-4 mt-1">
                      <input
                        type="text"
                        placeholder="Email"
                        className="col-span-4 focus:ring-blue-700 focus:border-blue-700 focus:outline-none border-gray-500 block w-full rounded-md sm:text-sm"
                        name="email"
                        value={params.email}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        placeholder="Username"
                        className="col-span-3 focus:ring-blue-700 focus:border-blue-700 focus:outline-none border-gray-500 block w-full rounded-md sm:text-sm"
                        name="username"
                        value={params.username}
                        onChange={handleChange}
                      />
                      <Listbox value={role} onChange={setRole}>
                        {({ open }) => (
                          <>
                            <Listbox.Label className="sr-only">
                              Role Type
                            </Listbox.Label>

                            {/* Input Box */}
                            <div className="relative">
                              <div className="inline-flex shadow-sm rounded-md divide-x divide-blue-600">
                                <div className="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-blue-600">
                                  <div className="relative inline-flex items-center bg-blue-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                    <p className="ml-2.5 text-sm">
                                      {role ? role.name : 'Not Selected'}
                                    </p>
                                  </div>
                                  <Listbox.Button className="relative inline-flex items-center bg-blue-500 p-2rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-1 focus:ring-offset-gray-50 focus:ring-blue-500">
                                    <span className="sr-only">Change role</span>
                                    <ChevronDownIcon
                                      className="h-5 w-5 text-white"
                                      aria-hidden="true"
                                    />
                                  </Listbox.Button>
                                </div>
                              </div>

                              {/* Drop Down */}
                              <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="origin-top=right absolute z-20 right-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  {roles.map((r) => (
                                    <Listbox.Option
                                      key={r.value}
                                      value={r}
                                      className={({ active }) =>
                                        joinClasses(
                                          active
                                            ? 'text-white bg-blue-500'
                                            : 'text-gray-900',
                                          'cursor-default select-none relative p-4 text-sm'
                                        )
                                      }
                                    >
                                      {({ selected, active }) => (
                                        <div className="flex flex-col">
                                          <div className="flex justify-between">
                                            <p
                                              className={
                                                selected
                                                  ? 'font-semibold'
                                                  : 'font-normal'
                                              }
                                            >
                                              {r.name}
                                            </p>
                                            {selected && (
                                              <span
                                                className={
                                                  active
                                                    ? 'text-white'
                                                    : 'text-blue-500'
                                                }
                                              >
                                                <CheckIcon
                                                  className="h-5 w-5"
                                                  aria-hidden="true"
                                                />
                                              </span>
                                            )}
                                          </div>
                                          <p
                                            className={joinClasses(
                                              active
                                                ? 'text-blue-200'
                                                : 'text-gray-500',
                                              'mt-2'
                                            )}
                                          >
                                            {r.description}
                                          </p>
                                        </div>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </>
                        )}
                      </Listbox>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Dashboard>
  )
}

export default Add
