const RegInitState: RegisterInitialStateType = {
  steps: [
    { id: 1, name: 'Define User Type', status: 'current' },
    { id: 1, name: 'User Details', status: 'upcoming' },
    {
      id: 2,
      name: 'Organization Details',
      status: 'upcoming'
    },
    { id: 3, name: 'Review', status: 'upcoming' }
  ],
  currentStep: 0
}
export default RegInitState
