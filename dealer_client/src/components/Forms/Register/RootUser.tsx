import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { XCircleIcon } from '@heroicons/react/outline'
import { Input, InputWrapper, Label, Panel } from 'components/library'
import { getRootRegState } from 'reducers/RootRegistration/selectors'
import { submitRegistration } from 'reducers/RootRegistration/actions'
import { useDispatch } from 'react-redux'
import cn from 'classnames'
import { InputNewUser, useRegisterRootUserMutation } from 'generated/types'

interface RootUserFormProps {}

const RootUserForm: FC<RootUserFormProps> = () => {
  const [credentials, setCredentials] = useState<
    InputNewUser & { confirmPassword?: string }
  >({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })
  const { errors, loading } = getRootRegState().userForm
  const dispatch = useDispatch()
  const [register] = useRegisterRootUserMutation()

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value.trim() })
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (credentials.password !== credentials.confirmPassword) {
      return
    }

    delete credentials.confirmPassword

    dispatch(
      submitRegistration({ register, options: { variables: { credentials } } })
    )
  }

  return (
    <Panel>
      <div className="space-y-8 p-0 md:px-4 md:py-2">
        <h2 className="text-center text-3xl font-extralight text-gray-900">
          New User Registration
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
                value={credentials.password!}
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
              className={cn(
                'w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600',
                { ['bg-blue-600 text-gray-200 opacity-80']: loading }
              )}
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
