import { XCircleIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { submitOrgInfo } from 'reducers/RootRegistration/actions'
import { getRootRegState } from 'reducers/RootRegistration/selectors'
import { useUpdateDealerOrgMutation } from '../../../generated/types'

import { Input, InputWrapper, Label, Panel } from '../../library'

interface OrganizationFormProps {}

const OrganizationForm: FC<OrganizationFormProps> = () => {
  const [params, setParams] = useState({
    name: '',
    streetAddress: '',
    streetAddressTwo: '',
    city: '',
    state: '',
    zip: '',
    default_dealer_number: ''
  })
  const { loading, errors } = getRootRegState()
  const [updateOrgInfo] = useUpdateDealerOrgMutation()
  const dispatch = useDispatch()

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParams({ ...params, [e.target.name]: e.target.value })
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    dispatch(submitOrgInfo({ updateOrgInfo, options: params }))
  }

  return (
    <Panel>
      <div className="space-yu-8 p-0 md:px-4 md:py-2">
        <h2 className="text-center text-3xl text-gray-900 pb-4">
          Organization Details
        </h2>
        {errors.length > 0 && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <XCircleIcon
                  className="h-5 w-5 text-red-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  There{' '}
                  {errors.length > 1
                    ? `were ${errors.length} errors`
                    : 'was 1 error'}{' '}
                  with your submission
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <ul role="list" className="list-disc pl-5 space-y-1">
                    {errors.map((error) => (
                      <li key={error.message}>{error.message}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        <form className="grid grid-cols-6 gap-y-6 gap-x-2" onSubmit={submit}>
          <InputWrapper className="col-span-6">
            <Label className="sr-only" htmlFor="name">
              Organization Name
            </Label>
            <Input
              placeholder="Organization Name"
              name="name"
              id="name"
              value={params.name}
              onChange={handleOnChange}
              required
            />
          </InputWrapper>
          <InputWrapper className="col-span-6">
            <Label className="sr-only" htmlFor="streetAddress">
              Organization Address
            </Label>
            <Input
              placeholder="Street Address"
              id="streetAddress"
              name="streetAddress"
              value={params.streetAddress}
              onChange={handleOnChange}
              required
            />
          </InputWrapper>
          <InputWrapper className="col-span-6">
            <Label className="sr-only" htmlFor="streetAddressTwo">
              Organization Street Address 2
            </Label>
            <Input
              placeholder="Street Address Line 2"
              id="streetAddressTwo"
              name="streetAddressTwo"
              value={params.streetAddressTwo}
              onChange={handleOnChange}
            />
          </InputWrapper>
          <InputWrapper className="col-span-2">
            <Label className="sr-only" htmlFor="city">
              City
            </Label>
            <Input
              placeholder="City"
              id="city"
              name="city"
              value={params.city}
              onChange={handleOnChange}
              required
            />
          </InputWrapper>
          <InputWrapper className="col-span-2">
            <Label className="sr-only" htmlFor="state">
              State
            </Label>
            <Input
              placeholder="State"
              id="state"
              name="state"
              value={params.state}
              onChange={handleOnChange}
              required
            />
          </InputWrapper>
          <InputWrapper className="col-span-2">
            <Label className="sr-only" htmlFor="zip">
              Zip
            </Label>
            <Input
              placeholder="Zip"
              id="zip"
              name="zip"
              value={params.zip}
              maxLength={5}
              onChange={handleOnChange}
              required
            />
          </InputWrapper>
          <InputWrapper className="col-span-6">
            <Label className="sr-only" htmlFor="default_dealer_number">
              Default Dealer Number
            </Label>
            <Input
              placeholder="Default Dealer Number"
              id="default_dealer_number"
              name="default_dealer_number"
              value={params.default_dealer_number}
              onChange={handleOnChange}
            />
          </InputWrapper>
          <div className="col-span-6 rounded-md shadow cursor-default">
            <span
              className={classNames(
                'flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 transition-colors duration-150 cursor-default',
                { ['opacity-90']: loading }
              )}
              onClick={submit}
            >
              Continue
            </span>
          </div>
        </form>
      </div>
    </Panel>
  )
}

export default OrganizationForm
