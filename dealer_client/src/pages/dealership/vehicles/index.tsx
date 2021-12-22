import { Table } from 'antd'
import { ColumnGroupType, ColumnsType } from 'antd/lib/table'
import { Dashboard } from 'layout'
import React from 'react'

const index = () => {
  const columns: ColumnsType<any> = [
    { title: 'ID', dataIndex: 'stock_number' },
    { title: 'Description' },
    {
      title: 'Status',
      filters: [
        { text: 'Archived', value: 'archived' },
        { text: 'Pending Publish', value: 'pending' },
        { text: 'Published', value: 'published' }
      ],
      filterMode: 'menu'
    }
  ]
  return (
    <Dashboard>
      <Table columns={columns} />
    </Dashboard>
  )
}

export default index
