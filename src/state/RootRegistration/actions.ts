import { createAsyncThunk } from '@reduxjs/toolkit'
import { Maybe } from 'graphql/jsutils/Maybe'

import { RootState } from 'state'

import {
  DealershipOrganization,
  FieldError,
  OrganizationInput,
  RegisterRootUserMutationFn,
  RegisterRootUserMutationOptions,
  SignUpReturn,
  UpdateDealerOrgMutationFn
} from '../../generated/types'

export const submitRegistration = createAsyncThunk<
  Maybe<SignUpReturn>,
  {
    register: RegisterRootUserMutationFn
    options: RegisterRootUserMutationOptions
  }
>(
  'SUBMIT_ROOT_REGISTRATION',
  async ({ register, options }, { rejectWithValue }) => {
    const { data, errors } = await register(options)

    if (errors) return rejectWithValue(errors)

    return data?.registerRootUser as Maybe<SignUpReturn>
  }
)
export const submitOrgInfo = createAsyncThunk<
  Maybe<DealershipOrganization>,
  {
    updateOrgInfo: UpdateDealerOrgMutationFn
    options: OrganizationInput
  }
>(
  'SUBMIT_ORG_REGISTRATION',
  async ({ updateOrgInfo, options }, { rejectWithValue, getState }) => {
    const { rootRegistration } = getState() as RootState

    if (!rootRegistration.org_key) {
      const error: [FieldError] = [
        { message: 'Error - Failed editing organization' }
      ]
      return rejectWithValue(error)
    }

    const { data, errors } = await updateOrgInfo({
      variables: {
        DealerKey: rootRegistration.org_key,
        OrganizationInput: options
      }
    })

    if (errors) return rejectWithValue(errors)

    return data?.updateDealerOrg as Maybe<DealershipOrganization>
  }
)
