import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useRegisterRootUserMutation } from '../../../generated/types'

import { Input, InputWrapper, Label, Panel } from '../../library'

interface RootUserFormProps {
  handleSubmit: () => void
}

const RootUserForm: FC<RootUserFormProps> = ({ handleSubmit }) => {
  const [register] = useRegisterRootUserMutation()

  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value.trim() })
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (credentials.password !== credentials.confirmPassword) {
      return
    }

    await register({
      variables: {
        credentials: {
          email: credentials.email,
          username: credentials.username,
          firstName: credentials.firstName,
          lastName: credentials.lastName,
          password: credentials.password
        }
      }
    }).then((res) => {
      if (res.data)
        window.localStorage.setItem(
          'organization',
          res.data.registerRootUser.dealershipOrganization.key
        )
      handleSubmit()
    })
  }

  return (
    <Panel>
      <div className="space-y-8 p-0 md:px-4 md:py-2">
        <h2 className="text-center text-3xl font-extralight text-gray-900">
          New User Registration
        </h2>
        <form className="space-y-6" onSubmit={submit}>
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
                value={credentials.firstName}
                onChange={handleOnChange}
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
                value={credentials.lastName}
                onChange={handleOnChange}
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
              value={credentials.email}
              onChange={handleOnChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="username" className="sr-only">
              Username
            </Label>
            <Input
              id="username"
              name="username"
              autoCapitalize="off"
              autoComplete="off"
              placeholder="Username"
              required
              value={credentials.username}
              onChange={handleOnChange}
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
                value={credentials.password}
                onChange={handleOnChange}
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
                value={credentials.confirmPassword}
                onChange={handleOnChange}
              />
            </InputWrapper>
          </div>
          <div>
            <button
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Panel>
  )
}

export default RootUserForm
