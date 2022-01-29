import { createReducer } from '@reduxjs/toolkit'

import { EFormState } from 'models/addVehicle'

import { toggleModal } from './actions'

export interface VehiclePageState {
  loading: boolean
  modal: boolean
  formStep: EFormState
}

export const initialState: VehiclePageState = {
  loading: false,
  modal: false,
  formStep: EFormState.VIN_SEARCH
}

export const vehiclePageReducer = createReducer(initialState, (page) => {
  page
    .addCase(toggleModal, (state, { payload }) => ({
      ...state,
      modal: typeof payload !== 'undefined' ? payload : !state.modal
    }))
    .addDefaultCase((state) => state)
})
