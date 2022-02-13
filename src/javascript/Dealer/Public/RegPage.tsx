import { FC } from 'react'

import style from './index.module.scss'
import { RegistrationForm } from './RegistrationForm'

interface Props {
  handleSuccess(input?: Record<string, string>): void
}

export const DealerRegistrationPage: FC<Props> = ({ handleSuccess }) => {
  const handleReg = (input: any) => {
    console.log(input)
    handleSuccess()
  }
  return (
    <div className={style.DealerRegistration}>
      <section className={style.formContainer}>
        <h2 className={style.formTitle}>Register A New Organization</h2>
        <RegistrationForm handleRegistration={handleReg} />
      </section>
    </div>
  )
}
