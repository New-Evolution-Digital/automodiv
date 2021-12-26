import { useSelector } from 'react-redux'

import { RootState } from 'reducers'

import { VehiclePageState } from './reducer'

export const UseVehiclePageState: () => VehiclePageState = () => {
  const state = useSelector((s: RootState) => s.vehiclePage)
  return state
}
