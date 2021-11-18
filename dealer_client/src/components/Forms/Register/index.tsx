import { FC, useState } from 'react'

import RootUserForm from './RootUser'
import UserTypeSelector from './UserTypeSelector'

interface IRootRegisterForm {
  values: RegContextValueType
}

const RootRegisterForm: FC<IRootRegisterForm> = ({ values }) => {
  const { state, dispatch } = values
  const { currentStep }: RegisterInitialStateType = state
  const [userType, setUserType] = useState<UserTypes>('')

  const handleUserSelected = (user: UserTypes) => {
    setUserType(user)
    dispatch({ type: 'nextStep' })
  }

  const getCurrentStep = () => {
    switch (currentStep) {
      case 0: {
        return <UserTypeSelector setUserType={handleUserSelected} />
      }
      case 1: {
        return <RootUserForm />
      }
      case 2: {
        if (userType === 'root') {
          return <h2>This will be the org detail submission page</h2>
        }

        return <></>
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
