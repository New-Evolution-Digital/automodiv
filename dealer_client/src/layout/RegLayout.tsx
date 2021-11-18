import React, { FC, useReducer } from 'react'

import * as RegState from '../state_manager/register'

const RegLayout: FC = ({ children }) => {
  const [state, dispatch] = useReducer(
    RegState.mainReducer,
    RegState.RegInitState
  )
  return (
    <RegState.RegContext.Provider value={{ state, dispatch }}>
      <div className="relative flex-auto flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        {children}
      </div>
    </RegState.RegContext.Provider>
  )
}

export default RegLayout
