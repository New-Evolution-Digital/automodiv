import { ERegistrationSteps } from 'models/registerForm'
import router from 'next/router'
import { FC } from 'react'
import { getRootRegState } from 'reducers/RootRegistration/selectors'

import OrganizationForm from './OrganizationForm'
import RootUserForm from './RootUser'

interface IRootRegisterForm {}

const RootRegisterForm: FC<IRootRegisterForm> = () => {
  const { currentStep, routeTo } = getRootRegState()

  if (routeTo) {
    router.replace(routeTo)
  }

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
