import { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import { ERegistrationSteps } from 'models/registerForm'
import { useRootRegState } from 'state/RootRegistration/selectors'

import OrganizationForm from './OrganizationForm'
import RootUserForm from './RootUser'

interface IRootRegisterForm {}

const RootRegisterForm: FC<IRootRegisterForm> = () => {
  const { rootRegistration } = useRootRegState()
  const navigate = useNavigate()

  if (rootRegistration.routeTo) {
    navigate(rootRegistration.routeTo, { replace: true })
  }

  if (rootRegistration.currentStep === ERegistrationSteps.ROOT_USER) {
    return <RootUserForm />
  }
  return <OrganizationForm />
}

export { default as RootUser } from './RootUser'
export default RootRegisterForm
