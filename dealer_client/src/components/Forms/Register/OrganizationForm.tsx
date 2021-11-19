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
        <form className="space-y-6">
          <InputWrapper>
            <Label className="sr-only">Organization Name</Label>
            <Input placeholder="Organization Name" />
          </InputWrapper>
          <InputWrapper>
            <Label className="sr-only">Organization Address</Label>
            <Input placeholder="Street Address" />
          </InputWrapper>
          <InputWrapper>
            <Label className="sr-only">Organization Street Address 2</Label>
            <Input placeholder="Street Address Line 2" />
          </InputWrapper>
          <div className="flex">
            <InputWrapper>
              <Label className="sr-only">City</Label>
              <Input placeholder="City" />
            </InputWrapper>
            <InputWrapper>
              <Label className="sr-only">State</Label>
              <Input placeholder="State" />
            </InputWrapper>
            <InputWrapper>
              <Label className="sr-only">Zip</Label>
              <Input placeholder="Zip" />
            </InputWrapper>
          </div>
          <InputWrapper>
            <Label className="sr-only">Default Dealer Number</Label>
            <Input placeholder="Default Dealer Number" />
          </InputWrapper>
        </form>
      </div>
    </Panel>
  )
}

export default OrganizationForm
