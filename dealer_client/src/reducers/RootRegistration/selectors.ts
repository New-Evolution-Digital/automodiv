import { useSelector } from 'react-redux'
import { RootState } from 'reducers'

export const getRootRegState = () => {
  return useSelector((state: RootState) => state.rootRegistration)
}
