import { createAsyncThunk } from '@reduxjs/toolkit'
import { Maybe } from 'graphql/jsutils/Maybe'
import {
  DealershipOrganization,
  RegisterRootUserMutationFn,
  RegisterRootUserMutationOptions,
  SignUpReturn,
  UpdateDealerOrgMutationFn,
  UpdateDealerOrgMutationOptions
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
    options: UpdateDealerOrgMutationOptions
  }
>(
  'SUBMIT_ORG_REGISTRATION',
  async ({ updateOrgInfo, options }, { rejectWithValue }) => {
    const { data, errors } = await updateOrgInfo(options)

    if (errors) return rejectWithValue(errors)

    return data?.updateDealerOrg as Maybe<DealershipOrganization>
  }
)
