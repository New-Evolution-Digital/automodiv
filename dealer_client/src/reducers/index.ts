import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import { vehiclePageReducer } from './dealershipVehiclePage/reducer'
import { RootRegistrationReducer } from './RootRegistration/reducer'

export const store = configureStore({
  reducer: {
    rootRegistration: RootRegistrationReducer,
    vehiclePage: vehiclePageReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
