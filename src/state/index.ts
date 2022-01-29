import {
  Action,
  configureStore,
  MiddlewareArray,
  ThunkAction
} from '@reduxjs/toolkit'

import { vehiclePageReducer } from './dealershipVehiclePage/reducer'
import { RootRegistrationReducer } from './RootRegistration/reducer'

export const store = configureStore({
  reducer: {
    rootRegistration: RootRegistrationReducer,
    vehiclePage: vehiclePageReducer
  },
  middleware: new MiddlewareArray()
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
export type AppDispatch = typeof store.dispatch
