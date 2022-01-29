import React from 'react'

import { Form } from '../../components'
import { Public } from '../../layout'
import RegLayout from '../../layout/RegLayout'

const JoinView = () => {
  return (
    <Public>
      <RegLayout>
        <Form.Register />
      </RegLayout>
    </Public>
  )
}

export default JoinView
