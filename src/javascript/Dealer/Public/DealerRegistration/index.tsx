import style from './index.module.scss'
import { RegistrationForm } from './RegistrationForm'

export const DealerRegistrationPage = () => {
  return (
    <div className={style.DealerRegistration}>
      <section className={style.formContainer}>
        <h2 className={style.formTitle}>Register A New Organization</h2>
        <RegistrationForm />
      </section>
    </div>
  )
}
