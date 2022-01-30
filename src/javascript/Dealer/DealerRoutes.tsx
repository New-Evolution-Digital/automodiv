import { Route, Routes } from 'react-router-dom'

import { DealerLanding } from './Public/DealerLanding'

export const DealerRoutes = () => {
  return (
    <Routes>
      <Route index element={<DealerLanding />} />
    </Routes>
  )
}
