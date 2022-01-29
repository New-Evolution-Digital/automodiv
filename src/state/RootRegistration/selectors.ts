import { useAppSelector } from 'utils/hooks'

export const useRootRegState = () => ({
  rootRegistration: useAppSelector((state) => state.rootRegistration)
})
