import { useRouter } from 'next/router'
import { FC } from 'react'
import { useGetDoorByIdQuery } from '../../../generated/types'
import { Dashboard } from '../../../layout'
import * as su from '../../../utils/stringUtils'

const DoorPage: FC = () => {
  const { query, push } = useRouter()
  const { data, loading } = useGetDoorByIdQuery({
    variables: {
      doorId: parseInt(query.id as string),
      orgCredentials: {
        key: localStorage.getItem('organization')
      }
    }
  })

  if (!!loading)
    return (
      <Dashboard>
        <div className="flex-grow">
          <h1>Loading</h1>
        </div>
      </Dashboard>
    )

  if (!data) {
    push('/dealership')
    return (
      <div className="flex-grow">
        <p>Error: Door not found</p>
      </div>
    )
  }

  const { name } = data.getDoorById
  return (
    <Dashboard dashboardTitle={su.capitalize(name || 'Untitled')}>
      <div className="flex-grow">
        <h1>Door Dashboard</h1>
      </div>
    </Dashboard>
  )
}

export default DoorPage
