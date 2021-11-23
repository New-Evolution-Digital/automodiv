import { FC } from 'react'

import OrganizationForm from './OrganizationForm'
import RootUserForm from './RootUser'
import UserTypeSelector from './UserTypeSelector'

interface IRootRegisterForm {
  values: RegContextValueType
}

const RootRegisterForm: FC<IRootRegisterForm> = ({ values }) => {
  const { state, dispatch } = values
  const { currentStep }: RegisterInitialStateType = state

  const nextPage = () => {
    dispatch({ type: 'nextStep' })
  }

  const handleUserSelected = () => {
    console.log('going to next page')
    nextPage()
  }

  const handleRootUserSubmit = () => {
    console.log('going to next page')
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
        return <OrganizationForm />
      }
      default: {
        window.location.href = '/'
        return <></>
      }
    }
  }

  return <>{getCurrentStep()}</>
}

export { default as RootUser } from './RootUser'
export default RootRegisterForm
