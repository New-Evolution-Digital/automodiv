import React, { FC } from 'react'

import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import classNames from 'classnames'
import { capitalize } from 'lodash'

import { InventoryTypes, useGetOrgInventoryQuery } from 'generated/types'

const formatRows = (data: InventoryTypes[]): any[] => {
  return data.map(({ id, year, make, model, vin, status }) => ({
    key: vin,
    stock_number: id,
    description: classNames(
      year,
      capitalize(make as string),
      capitalize(model as string)
    ),
    status: capitalize(status || '')
  }))
}

const columns: ColumnsType<any> = [
  { title: 'ID', dataIndex: 'stock_number' },
  { title: 'Description', dataIndex: 'description' },
  {
    title: 'Status',
    dataIndex: 'status',
    filters: [
      { text: 'Archived', value: 'archived' },
      { text: 'Pending', value: 'pending' },
      { text: 'Published', value: 'published' }
    ],
    filterMode: 'menu'
  }
]
const VehicleTable: FC = () => {
  const { data, loading } = useGetOrgInventoryQuery()

  return (
    <Table
      dataSource={formatRows(
        (data?.me.dealershipOrganization.getInventory as InventoryTypes[]) || []
      )}
      columns={columns}
      loading={loading}
    />
  )
}

export default VehicleTable
