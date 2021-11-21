declare global {
  type LinkTypes = {
    name: string
    href: string
  }

  type LinkCategory = {
    name: string
    featured: {
      name: string
      imageSrc: string
      imageAlt: string
      href: string
    }
  }

  type RegContextValueType = {
    state: InitialStateType
    dispatch: React.Dispatch<any>
  }

  type Steps = {
    id: number
    name: string
    status: 'completed' | 'current' | 'upcoming'
  }

  type RegisterInitialStateType = {
    steps: Steps[]
    currentStep: number
  }

  type RegistrationStepReducerState = {
    steps: Steps[]
  }

  type RegStepActions = {
    type: 'updateUserStatus'
    payload: 'completed' | 'current' | 'upcoming'
  }

  type UserTypes = 'root' | 'member' | ''
}

export {}
