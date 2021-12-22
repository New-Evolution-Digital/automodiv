import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { RootRegistrationReducer } from './RootRegistration/reducer'

export const store = configureStore({
  reducer: {
    rootRegistration: RootRegistrationReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
