import { FC } from 'react'

import style from './index.module.scss'
import { LoginForm } from './LoginForm'

interface Props {
  handleSuccess(input?: Record<string, string>): void
}

export const DealerLoginPage: FC<Props> = ({ handleSuccess }) => {
  const handleLogin = (input: any) => {
    console.log(input)
    handleSuccess()
  }

  return (
    <div className={style.DealerLogin}>
      <section className={style.formContainer}>
        <h2 className={style.formTitle}>Login</h2>
        <LoginForm handleLogin={handleLogin} />
      </section>
    </div>
  )
}
