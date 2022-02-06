import cn from 'classnames'

import { InputWrapper, Input, Label } from 'javascript/library'

import styles from './index.module.scss'

export const LoginForm = () => {
  return (
    <form className={styles.formControls} onSubmit={() => {}}>
      <div className={styles.formSection}>
        <InputWrapper className={cn(styles.formItem, 'col-span-6')}>
          <Label htmlFor="username" className="sr-only">
            Username
          </Label>
          <Input
            id="username"
            name="username"
            autoCapitalize="off"
            autoComplete="off"
            placeholder="Username"
            required
            className={styles.formInput}
          />
        </InputWrapper>
        <InputWrapper className={cn(styles.formItem, 'col-span-6')}>
          <Label htmlFor="password" className="sr-only">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoCapitalize="off"
            autoComplete="current-password"
            placeholder="Password"
            required
            className={styles.formInput}
          />
        </InputWrapper>
      </div>
      <div>
        <button
          className={cn(styles.submitButton, {
            [`${styles.pending}`]: false
          })}
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  )
}
