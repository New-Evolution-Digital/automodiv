import React, { FC } from 'react'
import { useMeQuery } from '../../generated/types'

import { Dashboard } from '../../layout'

const DealershipDashboard: FC = () => {
  const { data, loading } = useMeQuery({
    onCompleted: ({ me }) => {
      return { myself: me.username, org: me.dealershipOrganization }
    }
  })

  if (!loading) {
    return (
      <Dashboard>
        <h2>
          Welcome To Your Dealership,{' '}
          {!!data?.me.username && (
            <span>
              <span className="capitalize">{data?.me.username}</span> -{' '}
              <span className="capitalize">
                {data?.me.dealershipOrganization.name}
              </span>
            </span>
          )}
        </h2>
      </Dashboard>
    )
  } else {
    return <h1>Loading</h1>
  }
}

export default DealershipDashboard
