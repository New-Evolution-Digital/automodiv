import style from './index.module.scss'
import { LoginForm } from './LoginForm'

export const DealerLoginPage = () => {
  return (
    <div className={style.DealerLogin}>
      <section className={style.formContainer}>
        <h2 className={style.formTitle}>Login</h2>
        <LoginForm />
      </section>
    </div>
  )
}
