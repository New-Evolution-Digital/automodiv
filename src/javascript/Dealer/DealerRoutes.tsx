import { Link, Route, Routes } from 'react-router-dom'

import { DealerLanding } from './Public/DealerLanding'
import { PublicDealer } from './Public/PublicLayout'

export const DealerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicDealer />}>
        <Route index element={<DealerLanding />} />
      </Route>
      <Route
        path="*"
        element={
          <main>
            <p>There is nothing here</p>
            Go back to <Link to="/dealer">Dealership</Link> or{' '}
            <Link to="/">Home</Link>
          </main>
        }
      />
    </Routes>
  )
}
