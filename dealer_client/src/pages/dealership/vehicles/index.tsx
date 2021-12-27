import React, { FC } from 'react'

import { VehicleTable, Form } from 'components/Dealership/Vehicles'
import { Dashboard } from 'layout'

const VehiclePage: FC = () => {
  return (
    <Dashboard>
      <Form.QuickAddVehicle />
      <VehicleTable />
    </Dashboard>
  )
}

export default VehiclePage
