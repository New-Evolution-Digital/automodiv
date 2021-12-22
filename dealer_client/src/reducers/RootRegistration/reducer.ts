import { createReducer } from '@reduxjs/toolkit'
import { ERegistrationSteps } from 'models/registerForm'
import { submitOrgInfo, submitRegistration } from './actions'
import { FieldError } from 'generated/types'

export interface IRootRegistrationState {
  currentStep: ERegistrationSteps
  org_key: string | null
  loading: boolean
  errors: FieldError[]
  routeTo: string | null
}

const initialState: IRootRegistrationState = {
  currentStep: ERegistrationSteps.ROOT_USER,
  org_key: null,
  loading: false,
  errors: [],
  routeTo: null
}

export const RootRegistrationReducer = createReducer(initialState, (root) => {
  root
    .addCase(submitRegistration.pending, () => ({
      ...initialState,
      userForm: { ...initialState, loading: true, errors: [] }
    }))
    .addCase(submitRegistration.fulfilled, (state, { payload }) => {
      if (!payload) {
        return state
      }

      const { errors, user } = payload
      if (errors && errors.length > 0) {
        return { ...state, errors, loading: false }
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
          loading: false,
          org_key: user.data.dealershipOrganization.key,
          currentStep: ERegistrationSteps.ORG_INFO
        }
      }

      return state
    })
    .addCase(submitOrgInfo.pending, (state) => ({
      ...state,
      loading: true,
      errors: []
    }))
    .addCase(submitOrgInfo.fulfilled, (state, { payload }) => {
      if (!payload) {
        return { ...state, loading: false }
      }

      return { ...state, loading: false, routeTo: '/dealership' }
    })
    .addDefaultCase((state: IRootRegistrationState) => state)
})
