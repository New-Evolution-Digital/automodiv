import { createContext } from 'react'

import RegInitState from './RegInitState'

export const RegisterContext = createContext<RegContextValueType>({
  state: RegInitState,
  dispatch: () => null
})

export default RegisterContext
