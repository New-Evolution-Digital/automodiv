import currentStepReducer from './currentStep.reducer'
import stepReducer from './step.reducer'

const mainReducer = (
  { steps, currentStep }: RegisterInitialStateType,
  action: { type: string }
) => ({
  steps: stepReducer(steps, action),
  currentStep: currentStepReducer(currentStep, action)
})

export default mainReducer
