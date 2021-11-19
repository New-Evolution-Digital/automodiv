import { FC, FormEvent, useState } from 'react'
import OrganizationForm from './OrganizationForm'

import RootUserForm from './RootUser'
import UserTypeSelector from './UserTypeSelector'

interface IRootRegisterForm {
  values: RegContextValueType
}

const RootRegisterForm: FC<IRootRegisterForm> = ({ values }) => {
  const { state, dispatch } = values
  const { currentStep }: RegisterInitialStateType = state
  const [userType, setUserType] = useState<UserTypes>('root')

  const nextPage = () => {
    dispatch({ type: 'nextStep' })
  }

  const handleUserSelected = (user: UserTypes) => {
    setUserType(user)
    nextPage()
  }

  const handleRootUserSubmit = (e: FormEvent): void => {
    e.preventDefault()
    nextPage()
  }

  const handleOrgSubmit = (e: FormEvent): void => {
    e.preventDefault()
    nextPage()
  }

  const getCurrentStep = () => {
    switch (currentStep) {
      case 0: {
        return <UserTypeSelector setUserType={handleUserSelected} />
      }
      case 1: {
        return <RootUserForm handleSubmit={handleRootUserSubmit} />
      }
      case 2: {
        if (userType === 'root') {
          return <OrganizationForm handleSubmit={handleOrgSubmit} />
        } else {
          nextPage()
          return <></>
        }
      }
      default: {
        window.location.href = '/'
        return <></>
      }
    }
  }

  console.log(currentStep)

  return <>{getCurrentStep()}</>
}

export { default as RootUser } from './RootUser'
export default RootRegisterForm
