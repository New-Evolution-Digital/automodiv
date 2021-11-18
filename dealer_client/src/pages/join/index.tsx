import React from 'react'

import { Form } from '../../components'
import { Public } from '../../layout'
import RegLayout from '../../layout/RegLayout'
import { RegisterState } from '../../state_manager'

const JoinView = () => {
  return (
    <Public>
      <RegLayout>
        <RegisterState.RegContext.Consumer>
          {(values) => <Form.Register values={values} />}
        </RegisterState.RegContext.Consumer>
      </RegLayout>
    </Public>
  )
}

export default JoinView
