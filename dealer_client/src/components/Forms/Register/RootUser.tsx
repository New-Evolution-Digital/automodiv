import React from 'react'

import { Input, InputWrapper, Label, Panel } from '../../library'

const accountType = [
  {
    id: 'root',
    name: 'Root',
    description:
      'The owner of an organization. This option will generate a new organization.'
  },
  {
    id: 'member',
    name: 'Member',
    description:
      'The member of an organization. If the member has an authorization code, than a request will be sent to the root owner to accept this member.'
  }
]

const RootUser = () => {
  return (
    <Panel>
      <div className="space-y-8 p-0 md:px-4 md:py-2">
        <h2 className="text-center text-3xl font-extralight text-gray-900">
          New User Registration
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-2 items-stretch gap-4">
            <InputWrapper>
              <Label htmlFor="firstName" className="sr-only">
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                autoCapitalize="on"
                placeholder="First Name"
                required
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="lastName" className="sr-only">
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                autoCapitalize="on"
                autoComplete="family-name"
                placeholder="Last Name"
                required
              />
            </InputWrapper>
          </div>
          <InputWrapper>
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoCapitalize="off"
              autoComplete="email"
              placeholder="Email"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="username" className="sr-only">
              Username
            </Label>
            <Input
              id="username"
              name="email"
              autoCapitalize="off"
              autoComplete="off"
              placeholder="Username"
              required
            />
          </InputWrapper>
          <div className="grid grid-cols-2 gap-4">
            <InputWrapper>
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoCapitalize="off"
                autoComplete="new-password"
                placeholder="Password"
                required
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoCapitalize="off"
                autoComplete="new-password"
                placeholder="Confirm password"
                required
              />
            </InputWrapper>
          </div>
          <fieldset className="py-3">
            <legend className="sr-only">Account Types</legend>
            <div className="space-y-5">
              {accountType.map((acc) => (
                <div key={acc.id} className="relative flex items-center">
                  <div className="flex items-center h-5">
                    <input
                      id={acc.id}
                      name="plan"
                      type="radio"
                      defaultChecked={acc.id === 'member'}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-500 border-gray-300"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor={acc.id}
                      className="text-gray-700 font-medium"
                    >
                      {acc.name}
                    </label>
                    <p id={`${acc.id}-description`} className="text-gray-500">
                      {acc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </fieldset>
          <div>
            <button className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Panel>
  )
}

export default RootUser
