import { Link, Route, Routes, useNavigate } from 'react-router-dom'

import { useAuth } from 'utils/hooks'
import { PrivateRoute } from 'utils/hooks/usePrivateRoute'

import { PrivateDealer } from './Private/PrivateLayout'
import { DealerLanding } from './Public/DealerLanding'
import { DealerLoginPage } from './Public/LoginPage'
import { PublicDealer } from './Public/PublicLayout'
import { DealerRegistrationPage } from './Public/RegPage'

export const DealerRoutes = () => {
  const { isAuthed, setAuth, clearAuth } = useAuth()
  const navigate = useNavigate()

  const handleSetAuth = (
    authCache: Record<string, string> = {},
    nav = '/dealer/dashboard'
  ) => {
    setAuth(authCache)
    navigate(nav)
  }

  const handleLogout = () => {
    navigate('/dealer')
    clearAuth()
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          !isAuthed ? <PublicDealer /> : <PrivateDealer logout={handleLogout} />
        }
      >
        <Route
          path="join"
          element={<DealerRegistrationPage handleSuccess={handleSetAuth} />}
        />
        <Route
          path="login"
          element={<DealerLoginPage handleSuccess={handleSetAuth} />}
        />
        <Route index element={<DealerLanding />} />
      </Route>
      <Route
        path="/dashboard"
        element={
          <PrivateRoute
            authenticated={isAuthed}
            redirectTo="/dealer/login"
            replace
          >
            <PrivateDealer logout={handleLogout} />
          </PrivateRoute>
        }
      >
        <Route index element={<h1>Dealership Dashboard</h1>} />
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
