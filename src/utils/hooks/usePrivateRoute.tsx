import { FC } from 'react'

import { Navigate, NavigateProps, Outlet, To } from 'react-router-dom'

interface Props extends Omit<NavigateProps, 'to'> {
  redirectTo: To
  isOutlet?: boolean
  authenticated: boolean
}

export const PrivateRoute: FC<Props> = ({
  authenticated,
  children,
  redirectTo,
  isOutlet = false,
  ...rest
}) =>
  authenticated ? (
    <>{isOutlet ? <Outlet /> : children}</>
  ) : (
    <Navigate to={redirectTo} {...rest} />
  )
