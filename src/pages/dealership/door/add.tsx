import React, { ChangeEvent, FormEvent, useState } from 'react'

import router from 'next/router'

import { Label } from 'javascript/library'

import { useCreateDoorMutation } from '../../../generated/types'
import { Dashboard } from '../../../layout'

const Add = () => {
  const [params, setParams] = useState({
    name: '',
    dealerNumber: '',
    streetAddress: '',
    streetAddressTwo: '',
    city: '',
    state: '',
    zip: ''
  })

  const [add] = useCreateDoorMutation()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParams({ ...params, [e.target.name]: e.target.value })
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    add({
      variables: {
        key: localStorage.getItem('organization') || '',
        DoorParams: params
      }
    }).then(() => {
      router.push('/dealership')
    })
  }
  return (
    <Dashboard dashboardTitle="New Door">
      <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-8">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Public Profile
              </h3>
              <p className="mt-1 text-2m text-gray-600">
                This information will be displayed publicly.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={submit}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <Label className="sr-only">Dealership Name</Label>
                      <div className="flex rounded-md shadow-sm">
                        <input
                          type="text"
                          placeholder="Dealership Name"
                          name="name"
                          value={params.name}
                          onChange={handleChange}
                          className="focus:ring-blue-700 focus:border-blue-700 focus:outline-none border-gray-500 block w-full rounded-md sm:text-sm"
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Dealer Number"
                      name="dealerNumber"
                      value={params.dealerNumber}
                      onChange={handleChange}
                      className="focus:ring-blue-700 focus:border-blue-700 focus:outline-none border-gray-500 block w-full rounded-md sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-gray-700">
                      Location
                    </label>
                    <div className="grid grid-cols-3 gap-4 mt-1">
                      <input
                        type="text"
                        placeholder="Street Address"
                        className="col-span-3 focus:ring-blue-700 focus:border-blue-700 focus:outline-none border-gray-500 block w-full rounded-md sm:text-sm"
                        name="streetAddress"
                        value={params.streetAddress}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        placeholder="Street Address Two"
                        className="col-span-3 focus:ring-blue-700 focus:border-blue-700 focus:outline-none border-gray-500 block w-full rounded-md sm:text-sm"
                        name="streetAddressTwo"
                        value={params.streetAddressTwo}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        placeholder="City"
                        className="focus:ring-blue-700 focus:border-blue-700 focus:outline-none border-gray-500 block w-full rounded-md sm:text-sm"
                        name="city"
                        value={params.city}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        placeholder="State"
                        className="focus:ring-blue-700 focus:border-blue-700 focus:outline-none border-gray-500 block w-full rounded-md sm:text-sm"
                        name="state"
                        value={params.state}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        placeholder="Zip Code"
                        className=" focus:ring-blue-700 focus:border-blue-700 focus:outline-none border-gray-500 block w-full rounded-md sm:text-sm"
                        name="zip"
                        value={params.zip}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
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
