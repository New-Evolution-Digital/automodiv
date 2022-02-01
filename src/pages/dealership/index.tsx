import React, { FC } from 'react'

import { PlusCircleIcon } from '@heroicons/react/outline'
import { Link, useNavigate } from 'react-router-dom'

import {
  useGetDoorsByOrgIdQuery,
  useGetEmployeeByOrgKeyQuery,
  useMeQuery
} from '../../generated/types'
import { Dashboard } from '../../layout'
import * as su from '../../utils/stringUtils'

const DealershipDashboard: FC = () => {
  const navigate = useNavigate()
  const meQuery = useMeQuery({
    onCompleted: ({ me }) => {
      return { myself: me.username, org: me.dealershipOrganization }
    }
  })

  const orgKey =
    localStorage.getItem('organization') ||
    meQuery.data?.me.dealershipOrganization.key
  const doors = useGetDoorsByOrgIdQuery({
    variables: { OrgCredenials: { key: orgKey } }
  })
  const employees = useGetEmployeeByOrgKeyQuery({
    variables: { key: orgKey ?? '' }
  })

  if (!orgKey) {
    localStorage.clear()
    sessionStorage.clear()
    navigate('/', { replace: true })
    return <></>
  }

  const doorsExist = () => {
    if (!doors.data) return false

    const doorGroup = doors.data.getDoorsByOrgId

    if (doorGroup === undefined) return undefined

    if (doorGroup.length === 0) return undefined

    return true
  }

  const employeesExist = () => {
    if (!employees.data) return false
    const empGroup = employees.data.getEmployeesByOrgKey

    if (empGroup === null || empGroup === undefined) return false

    if (empGroup.length === 0) return false

    return true
  }

  if (!meQuery.loading) {
    return (
      <Dashboard
        dashboardTitle={`${su.capitalize(
          meQuery.data?.me.dealershipOrganization.name || ''
        )}`}
      >
        <div className="max-w-7xl mx-auto py-4">
          <h2>
            Welcome To Your Dealership,{' '}
            {!!meQuery.data?.me.username && (
              <span>
                <span className="capitalize">{meQuery.data?.me.username}</span>{' '}
                -{' '}
                <span className="capitalize">
                  {meQuery.data?.me.dealershipOrganization.name}
                </span>
              </span>
            )}
          </h2>
        </div>
        <div className="max-w-7xl mx-auto py-2 flex gap-3">
          <div className="w-full">
            <div className="flex gap-3">
              <h2 className="text-3xl mb-3">Doors</h2>
              <Link to="/dealership/door/add">
                <span className="flex items-center">
                  <PlusCircleIcon className="h-4 w-4 mr-2" />
                  <span>Add A Door</span>
                </span>
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            No.
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Address
                          </th>
                          <th className="relative px-6 py-3">
                            <span className="sr-only">View</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {doorsExist() ? (
                          <>
                            {doors.data?.getDoorsByOrgId.map(
                              (door, doorIdx) => {
                                const { id } = door
                                return (
                                  <tr
                                    key={`${door.id}-${doorIdx}`}
                                    className={
                                      doorIdx % 2 === 0
                                        ? 'bg-white'
                                        : 'bg-gray-50'
                                    }
                                  >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                      {doorIdx + 1}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center text-gray-900">
                                      {su.capitalize(door.name as string)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center text-gray-900">
                                      {su.capitalize(
                                        door.streetAddress as string
                                      )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                      <Link to={`/dealership/door/${id}`}>
                                        <span className="text-blue-600 hover:text-blue-900">
                                          View
                                        </span>
                                      </Link>
                                    </td>
                                  </tr>
                                )
                              }
                            )}
                          </>
                        ) : (
                          <tr className="text-center">
                            <td colSpan={4}></td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex gap-3">
              <h2 className="text-3xl mb-3">Employees</h2>
              <Link to="/dealership/employee/add">
                <span className="flex items-center">
                  <PlusCircleIcon className="h-4 w-4 mr-2" />
                  <span>Add An Employee</span>
                </span>
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            NO.
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Role
                          </th>
                          <th className="relative px-6 py-3">
                            <span className="sr-only">View</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {employeesExist() ? (
                          <>
                            {employees.data?.getEmployeesByOrgKey?.map(
                              (emp, empIdx) => {
                                let name = `${emp.firstName} ${emp.lastName}`

                                if (
                                  emp.username === meQuery.data?.me.username
                                ) {
                                  name = 'Me'
                                }

                                return (
                                  <tr
                                    key={`Employee-Table-Row-${empIdx}`}
                                    className={
                                      empIdx % 2 === 0
                                        ? 'bg-white'
                                        : 'bg-gray-50'
                                    }
                                  >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                      {emp.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                                      {su.capitalize(name)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                                      {su.capitalize(emp.role)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                      <Link
                                        to={`/dealership/employee/${emp.id}`}
                                      >
                                        <span className="text-blue-600 hover:text-blue-900">
                                          View
                                        </span>
                                      </Link>
                                    </td>
                                  </tr>
                                )
                              }
                            )}
                          </>
                        ) : (
                          <tr className="text-center">
                            <td colSpan={4}></td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    )
  }
  return <h1>Loading</h1>
}

export default DealershipDashboard
