import { ChangeEvent, FC, FormEvent, useState } from 'react'

import cn from 'classnames'

import { InputWrapper, Input, Label } from 'javascript/library'

import { registrationInputs } from '../constants/RegisterForm'
import styles from './index.module.scss'

interface Props {
  handleRegistration(input: any): void
}

export const RegistrationForm: FC<Props> = ({ handleRegistration }) => {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>(
    registrationInputs.reduce(
      (group, input) => ({ ...group, [input.name]: '' }),
      {}
    )
  )

  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value })

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleRegistration({})
  }

  return (
    <form className={styles.formControls} onSubmit={submit}>
      <div className={styles.formSection}>
        {registrationInputs.slice(0, 6).map((input, idx) => (
          <InputWrapper
            key={`form-row-${idx + 1}`}
            className={cn(styles.formItem, `col-span-${input.span}`)}
          >
            <Label htmlFor={input.name} className="sr-only">
              {input.label}
            </Label>
            <Input
              id={input.name}
              name={input.name}
              autoComplete={input.autoComplete ?? 'off'}
              autoCapitalize={input.autoCapitalize ?? 'off'}
              placeholder={input.label}
              required={input.required}
              value={formValues[input.name]}
              onChange={handleUpdate}
              className={styles.formInput}
              type={input.type ?? 'text'}
            />
          </InputWrapper>
        ))}
      </div>
      <hr />
      <div className={styles.formSection}>
        {registrationInputs.slice(6).map((input, idx) => (
          <InputWrapper
            key={`form-row-${idx + 1}`}
            className={cn(styles.formItem, `col-span-${input.span}`)}
          >
            <Label htmlFor={input.name} className="sr-only">
              {input.label}
            </Label>
            <Input
              id={input.name}
              name={input.name}
              autoComplete={input.autoComplete}
              autoCapitalize={input.autoCapitalize}
              placeholder={input.label}
              required={input.required}
              value={formValues[input.name]}
              onChange={handleUpdate}
              className={styles.formInput}
            />
          </InputWrapper>
        ))}
      </div>
      <div>
        <button
          className={cn(styles.submitButton, {
            [`${styles.pending}`]: false
          })}
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
