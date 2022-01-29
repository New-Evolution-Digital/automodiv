import { useAppSelector } from 'utils/hooks'

export const UseVehiclePageState = () => ({
  vehiclePage: useAppSelector((s) => s.vehiclePage)
})
