import { createReducer } from '@reduxjs/toolkit'
import { ERegistrationSteps } from 'models/registerForm'
import { submitRegistration } from './actions'
import { FieldError } from 'generated/types'

export interface IRootRegistrationState {
  currentStep: ERegistrationSteps
  userForm: {
    loading: boolean
    errors: FieldError[]
  }
}

const initialState: IRootRegistrationState = {
  currentStep: ERegistrationSteps.ROOT_USER,
  userForm: { loading: false, errors: [] }
}

export const RootRegistrationReducer = createReducer(initialState, (root) => {
  root
    .addCase(submitRegistration.pending, () => ({
      ...initialState,
      userForm: { ...initialState.userForm, loading: true }
    }))
    .addCase(submitRegistration.fulfilled, (state, { payload }) => {
      if (!payload) {
        return state
      }

      const { errors, user } = payload
      const defUserFormState = state.userForm
      if (errors && errors.length > 0) {
        return { ...state, userForm: { ...defUserFormState, errors } }
      }

      if (user) {
        if (window)
          window.localStorage.setItem(
            'organization',
            user.data.dealershipOrganization.key
          )
        window.localStorage.setItem('oid', user.jwt)
        return {
          ...state,
          userFor: { ...defUserFormState },
          currentStep: ERegistrationSteps.ORG_INFO
        }
      }

      return state
    })
})
