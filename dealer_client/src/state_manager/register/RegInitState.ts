const RegInitState: RegisterInitialStateType = {
  steps: [
    { id: 1, name: 'Define User Type', href: '/join', status: 'current' },
    { id: 1, name: 'User Details', href: '/join/user', status: 'upcoming' },
    {
      id: 2,
      name: 'Organization Details',
      href: '/join/organization',
      status: 'upcoming'
    },
    { id: 3, name: 'Review', href: '/join/review', status: 'upcoming' }
  ],
  currentStep: 0
}
export default RegInitState
