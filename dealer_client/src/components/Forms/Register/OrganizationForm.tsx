import React, { FC, FormEvent } from 'react'
import { Input, InputWrapper, Label, Panel } from '../..'

interface OrganizationFormProps {
  handleSubmit: (e: FormEvent) => void
}

const OrganizationForm: FC<OrganizationFormProps> = () => {
  return (
    <Panel>
      <div className="space-yu-8 p-0 md:px-4 md:py-2">
        <h2 className="text-center text-3xl text-gray-900 pb-4">
          Organization Details
        </h2>
        <form className="grid grid-cols-6 gap-y-6 gap-x-2">
          <InputWrapper className="col-span-6">
            <Label className="sr-only">Organization Name</Label>
            <Input placeholder="Organization Name" />
          </InputWrapper>
          <InputWrapper className="col-span-6">
            <Label className="sr-only">Organization Address</Label>
            <Input placeholder="Street Address" />
          </InputWrapper>
          <InputWrapper className="col-span-6">
            <Label className="sr-only">Organization Street Address 2</Label>
            <Input placeholder="Street Address Line 2" />
          </InputWrapper>
          <InputWrapper className="col-span-2">
            <Label className="sr-only">City</Label>
            <Input placeholder="City" />
          </InputWrapper>
          <InputWrapper className="col-span-2">
            <Label className="sr-only">State</Label>
            <Input placeholder="State" />
          </InputWrapper>
          <InputWrapper className="col-span-2">
            <Label className="sr-only">Zip</Label>
            <Input placeholder="Zip" />
          </InputWrapper>
          <InputWrapper className="col-span-3">
            <Label className="sr-only">Phone Number</Label>
            <Input placeholder="Phone Number" />
          </InputWrapper>
          <InputWrapper className="col-span-3">
            <Label className="sr-only">Website</Label>
            <Input placeholder="Website" />
          </InputWrapper>
          <InputWrapper className="col-span-6">
            <Label className="sr-only">Default Dealer Number</Label>
            <Input placeholder="Default Dealer Number" />
          </InputWrapper>
          <div className="col-span-6 rounded-md shadow cursor-default">
            <span className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 transition-colors duration-150 cursor-default">
              Continue
            </span>
          </div>
        </form>
      </div>
    </Panel>
  )
}

export default OrganizationForm
