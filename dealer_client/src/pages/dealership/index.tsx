import { PlusCircleIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React, { FC } from 'react'
import { EmptyState } from '../../components'
import { useGetDoorsByOrgIdQuery, useMeQuery } from '../../generated/types'
import { Dashboard } from '../../layout'
import * as su from '../../utils/stringUtils'

const DealershipDashboard: FC = () => {
  const me = useMeQuery({
    onCompleted: ({ me }) => {
      return { myself: me.username, org: me.dealershipOrganization }
    }
  })
  const doors = useGetDoorsByOrgIdQuery({
    variables: { OrgCredenials: { key: localStorage.getItem('organization') } }
  })

  const doorsExist = () => {
    if (!doors.data) return

    const doorGroup = doors.data.getDoorsByOrgId

    if (doorGroup === undefined) return

    if (doorGroup.length === 0) return

    return true
  }

  if (!me.loading) {
    return (
      <Dashboard
        dashboardTitle={`${su.capitalize(
          me.data?.me.dealershipOrganization.name || ''
        )}`}
      >
        <div className="max-w-7xl mx-auto py-4">
          <h2>
            Welcome To Your Dealership,{' '}
            {!!me.data?.me.username && (
              <span>
                <span className="capitalize">{me.data?.me.username}</span> -{' '}
                <span className="capitalize">
                  {me.data?.me.dealershipOrganization.name}
                </span>
              </span>
            )}
          </h2>
        </div>
        <div className="max-w-7xl mx-auto py-2 flex gap-3">
          <div className="w-full sm:max-w-md">
            <div className="flex gap-3">
              <h2 className="text-3xl mb-3">Doors</h2>
              <Link href="/dealership/door/add" passHref>
                <a className="flex items-center">
                  <PlusCircleIcon className="h-4 w-4 mr-2" />
                  <span>Add A Door</span>
                </a>
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
                                const id = door.id
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
                                      <Link
                                        href={`/dealership/door/${id}`}
                                        passHref
                                      >
                                        <a className="text-blue-600 hover:text-blue-900">
                                          View
                                        </a>
                                      </Link>
                                    </td>
                                  </tr>
                                )
                              }
                            )}
                          </>
                        ) : (
                          <tr className="text-center">
                            <td colSpan={4}>
                              <EmptyState.DealerDoor />
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:max-w-md">
            <div className="flex gap-3">
              <h2 className="text-3xl mb-3">Employees</h2>
              <Link href="/dealership/employee/add" passHref>
                <a className="flex items-center">
                  <PlusCircleIcon className="h-4 w-4 mr-2" />
                  <span>Add An Employee</span>
                </a>
              </Link>
            </div>
            <div className="flex flex-col"></div>
          </div>
        </div>
      </Dashboard>
    )
  } else {
    return <h1>Loading</h1>
  }
}

export default DealershipDashboard
