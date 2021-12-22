import { createAsyncThunk } from '@reduxjs/toolkit'
import { Maybe } from 'graphql/jsutils/Maybe'
import {
  RegisterRootUserMutationFn,
  RegisterRootUserMutationOptions,
  SignUpReturn
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
