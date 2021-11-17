import React, { createContext, Dispatch, FC, useReducer } from 'react'

export const RegisterContext = createContext<[any, Dispatch<any>] | undefined>(
  undefined
)

const reducer = (state: RegistrationStepReducerState, action: Actions) => {
  switch (action.type) {
    default:
      return state
  }
}

type RegistrationStepReducerState = {
  steps: Steps[]
}

type Steps = { id: number; name: string; href: string; status: string }

type Actions = { type: string; payload?: any }

const RegLayout: FC = ({ children }) => {
  const registrationStepReducer = useReducer(reducer, {
    steps: [
      { id: 1, name: 'User Details', href: '/join/user', status: 'current' },
      {
        id: 2,
        name: 'Organization Details',
        href: '/join/organization',
        status: 'upcomming'
      },
      { id: 3, name: 'Review', href: '/join/review', status: '/join/review' }
    ]
  })
  return (
    <RegisterContext.Provider value={registrationStepReducer}>
      <div className="relative flex-auto flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        {children}
      </div>
    </RegisterContext.Provider>
  )
}

export default RegLayout
