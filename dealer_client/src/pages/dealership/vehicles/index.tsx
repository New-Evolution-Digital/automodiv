import React, { FC, useEffect, useState } from 'react'

import { Form, Input, Select, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import classNames from 'classnames'
import { capitalize } from 'lodash'

import {
  InventoryTypes,
  useGetAvailableMakesQuery,
  useGetOrgInventoryQuery,
  useGetModelsLazyQuery
} from 'generated/types'
import { Dashboard } from 'layout'
import styles from 'styles/vehicles.module.scss'

const formatRows = (data: InventoryTypes[]): any[] => {
  return data.map(({ id, year, make, model, vin }) => ({
    key: vin,
    stock_number: id,
    description: classNames(
      year,
      capitalize(make as string),
      capitalize(model as string)
    ),
    status: 'pending'
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
      { text: 'Pending Publish', value: 'pending' },
      { text: 'Published', value: 'published' }
    ],
    filterMode: 'menu'
  }
]

const VehiclePage: FC = () => {
  const { data, loading } = useGetOrgInventoryQuery()
  const [details, setDetails] = useState({
    vin: '',
    year: '',
    make: '',
    model: ''
  })
  const makes = useGetAvailableMakesQuery().data?.getAvailableMakes
  const [getModels, models] = useGetModelsLazyQuery()

  useEffect(() => {
    const { year, make } = details
    if (year && make) {
      getModels({ variables: { year, make } })
    }
  }, [details, getModels])

  return (
    <Dashboard>
      <div className={styles.quickAdd}>
        <p className={styles.headerText}>Quick Add A Vehicle</p>
        <Form
          name="nest-messages"
          layout="vertical"
          className={styles.infoForm}
        >
          <Form.Item
            name={['user', 'VIN']}
            className={classNames(styles.formInput, styles.vinInput)}
          >
            <Input
              placeholder="VIN"
              onChange={(e) => setDetails({ ...details, vin: e.target.value })}
            />
          </Form.Item>
          <p>or</p>
          <Form.Item name={['user', 'Year']} className={styles.formInput}>
            <Input
              placeholder="Year"
              onChange={(e) => setDetails({ ...details, year: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            className={classNames(styles.formInput, styles.makeSelector)}
          >
            <Select
              showSearch
              placeholder="Make"
              size="large"
              onChange={(e) =>
                setDetails({ ...details, make: e?.toString() || '' })
              }
            >
              <Select.Option value="">Make</Select.Option>
              {makes &&
                makes.map((make) => (
                  <Select.Option key={make} value={make}>
                    {make}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            className={classNames(styles.formInput, styles.makeSelector)}
          >
            <Select
              showSearch
              placeholder="Model"
              size="large"
              onChange={(e) =>
                setDetails({ ...details, model: e?.toString() || '' })
              }
            >
              <Select.Option value="">Model</Select.Option>
              {models.data?.getModelsWithYearMake &&
                models.data?.getModelsWithYearMake.map((model) => (
                  <Select.Option key={model} value={model}>
                    {model}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <div className={styles.submitButton}>
            <span>ADD</span>
          </div>
        </Form>
      </div>
      <Table
        dataSource={formatRows(
          (data?.me.dealershipOrganization.getInventory as InventoryTypes[]) ||
            []
        )}
        columns={columns}
        loading={loading}
      />
    </Dashboard>
  )
}

export default VehiclePage
