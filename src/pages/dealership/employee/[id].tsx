import { useRouter } from 'next/router'
import { FC } from 'react'
import { useGetEmployeeByIdQuery } from '../../../generated/types'
import { Dashboard } from '../../../layout'
import * as su from '../../../utils/stringUtils'

const DoorPage: FC = () => {
  const { query, push, replace } = useRouter()
  const orgKey = localStorage.getItem('organization')
  if (!query.id) {
    replace('/dealership')
    return <></>
  }

  if (!orgKey) {
    replace('/')
    return <></>
  }
  const { data, loading } = useGetEmployeeByIdQuery({
    variables: {
      EmployeeId: query.id as string,
      OrgKey: orgKey
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

  if (!data || !data.getEmployeeById) {
    push('/dealership')
    return (
      <div className="flex-grow">
        <p>Error: Door not found</p>
      </div>
    )
  }

  const emp = data.getEmployeeById
  return (
    <Dashboard
      dashboardTitle={su.capitalize(
        `${emp.firstName} ${emp.lastName}` || 'Unnamed'
      )}
    >
      <div className="flex-grow">
        <h1>Employee Dashboard</h1>
      </div>
    </Dashboard>
  )
}

export default DoorPage
