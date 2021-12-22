import { ERegistrationSteps } from 'models/registerForm'
import { FC } from 'react'
import { getRootRegState } from 'reducers/RootRegistration/selectors'

import OrganizationForm from './OrganizationForm'
import RootUserForm from './RootUser'

interface IRootRegisterForm {}

const RootRegisterForm: FC<IRootRegisterForm> = () => {
  const { currentStep } = getRootRegState()

  switch (currentStep) {
    case ERegistrationSteps.ROOT_USER: {
      return <RootUserForm />
    }
    case ERegistrationSteps.ORG_INFO: {
      return <OrganizationForm />
    }
  }
}

export { default as RootUser } from './RootUser'
export default RootRegisterForm
