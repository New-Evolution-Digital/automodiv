import { Link, Route, Routes } from 'react-router-dom'

import { DealerLanding } from './Public/DealerLanding'
import { DealerLoginPage } from './Public/LoginPage'
import { PublicDealer } from './Public/PublicLayout'
import { DealerRegistrationPage } from './Public/RegPage'

export const DealerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicDealer />}>
        <Route path="join" element={<DealerRegistrationPage />} />
        <Route path="login" element={<DealerLoginPage />} />
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
