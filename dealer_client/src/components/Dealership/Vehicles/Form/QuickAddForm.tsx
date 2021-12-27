import React, { FC, useEffect, useState } from 'react'

import { Button, Form, Input, Select } from 'antd'
import classNames from 'classnames'

import {
  useGetAvailableMakesQuery,
  useGetModelsLazyQuery,
  useQuickAddCarMutation
} from 'generated/types'

import styles from './QuickAddStyle.module.scss'

const initialDetailState = {
  vin: '',
  year: '',
  make: '',
  model: ''
}

const QuickAddForm: FC = () => {
  const [details, setDetails] = useState(initialDetailState)

  const makes = useGetAvailableMakesQuery().data?.getAvailableMakes
  const [getModels, models] = useGetModelsLazyQuery()
  const [QuickAdd, { loading }] = useQuickAddCarMutation()

  useEffect(() => {
    const { year, make } = details
    if (year && make) {
      getModels({ variables: { year, make } })
    }
  }, [details, getModels])

  const handleSubmit = async () => {
    if (loading) {
      return
    }

    if (details.vin || (details.year && details.make && details.model)) {
      const res = await QuickAdd({
        variables: {
          details: details.vin
            ? { vin: details.vin.trim() }
            : {
                manual: {
                  year: details.year,
                  make: details.make,
                  model: details.model
                }
              }
        }
      })

      if (res.data?.quickAddCar.id) {
        setDetails(initialDetailState)
      }
    }
  }

  return (
    <div className={styles.quickAdd}>
      <p className={styles.headerText}>Quick Add A Vehicle</p>
      <Form
        name="nest-messages"
        layout="vertical"
        className={styles.infoForm}
        autoComplete="off"
        onFinish={handleSubmit}
      >
        <Form.Item
          name={['user', 'VIN']}
          className={classNames(styles.formInput, styles.vinInput)}
        >
          <Input
            placeholder="VIN"
            onChange={(e) => setDetails({ ...details, vin: e.target.value })}
            disabled={loading}
          />
        </Form.Item>
        <p>or</p>
        <Form.Item name={['user', 'Year']} className={styles.formInput}>
          <Input
            placeholder="Year"
            onChange={(e) => setDetails({ ...details, year: e.target.value })}
            disabled={loading}
          />
        </Form.Item>
        <Form.Item
          className={classNames(styles.formInput, styles.makeSelector)}
        >
          <Select
            showSearch
            placeholder="Make"
            size="large"
            disabled={loading}
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
            disabled={loading}
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
        <Button
          className={styles.submitButton}
          htmlType="submit"
          type="primary"
          size="large"
        >
          <span>ADD</span>
        </Button>
      </Form>
    </div>
  )
}

export default QuickAddForm
