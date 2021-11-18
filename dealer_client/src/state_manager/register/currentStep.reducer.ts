import produce from 'immer'

const currentStepReducer = (state: number, action: { type: string }) => {
  switch (action.type) {
    case 'nextStep': {
      return produce(state, (draft) => draft + 1)
    }
    default:
      return state
  }
}

export default currentStepReducer
