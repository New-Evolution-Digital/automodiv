import React, { FC } from 'react'

import { VehicleTable, Form } from 'javascript/Dealership/Vehicles'
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
