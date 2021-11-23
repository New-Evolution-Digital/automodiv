import router from 'next/router'
import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
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
  const [orgUpdate] = useUpdateDealerOrgMutation()

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParams({ ...params, [e.target.name]: e.target.value })
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    orgUpdate({
      variables: {
        DealerKey: localStorage.getItem('organization') || '',
        OrganizationInput: params
      }
    }).then((res) => {
      if (res.data) {
        router.replace(`/dealership`)
      }
    })
  }

  return (
    <Panel>
      <div className="space-yu-8 p-0 md:px-4 md:py-2">
        <h2 className="text-center text-3xl text-gray-900 pb-4">
          Organization Details
        </h2>
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
              className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 transition-colors duration-150 cursor-default"
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
