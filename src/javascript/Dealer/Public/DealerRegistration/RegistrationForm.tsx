import cn from 'classnames'

import { InputWrapper, Input, Label } from 'javascript/library'

import styles from './index.module.scss'

export const RegistrationForm = () => {
  return (
    <form className={styles.formControls} onSubmit={() => {}}>
      <div className={styles.formSection}>
        <InputWrapper className={cn(styles.formItem, 'col-span-3')}>
          <Label htmlFor="firstName" className="sr-only">
            First Name
          </Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            autoCapitalize="on"
            placeholder="First Name"
            required
            value={''}
            className={styles.formInput}
            // onChange={}
          />
        </InputWrapper>
        <InputWrapper className={cn(styles.formItem, 'col-span-3')}>
          <Label htmlFor="lastName" className="sr-only">
            Last Name
          </Label>
          <Input
            id="lastName"
            name="lastName"
            autoCapitalize="on"
            autoComplete="family-name"
            placeholder="Last Name"
            required
            className={styles.formInput}
            value={''}
            // onChange={}
          />
        </InputWrapper>
        <InputWrapper className={cn(styles.formItem, 'col-span-6')}>
          <Label htmlFor="email" className="sr-only">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoCapitalize="off"
            autoComplete="email"
            placeholder="Email"
            required
            className={styles.formInput}
            // value={credentials.email}
            // onChange={handleOnChange}
          />
        </InputWrapper>
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
            // value={credentials.username}
            // onChange={handleOnChange}
          />
        </InputWrapper>
        <InputWrapper className={cn(styles.formItem, 'col-span-3')}>
          <Label htmlFor="password" className="sr-only">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoCapitalize="off"
            autoComplete="new-password"
            placeholder="Password"
            required
            className={styles.formInput}
            // value={credentials.password!}
            // onChange={handleOnChange}
          />
        </InputWrapper>
        <InputWrapper className={cn(styles.formItem, 'col-span-3')}>
          <Label htmlFor="confirmPassword" className="sr-only">
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoCapitalize="off"
            autoComplete="new-password"
            placeholder="Confirm password"
            required
            className={styles.formInput}
            // value={credentials.confirmPassword}
            // onChange={handleOnChange}
          />
        </InputWrapper>
      </div>
      <hr />
      <div className={styles.formSection}>
        <InputWrapper className={cn(styles.formItem, 'col-span-6')}>
          <Label className="sr-only" htmlFor="name">
            Organization Name
          </Label>
          <Input
            placeholder="Organization Name"
            name="name"
            id="name"
            className={styles.formInput}
            // value={params.name}
            // onChange={handleOnChange}
            required
          />
        </InputWrapper>
        <InputWrapper className={cn(styles.formItem, 'col-span-6')}>
          <Label className="sr-only" htmlFor="streetAddress">
            Organization Address
          </Label>
          <Input
            placeholder="Street Address"
            id="streetAddress"
            name="streetAddress"
            className={styles.formInput}
            // value={params.streetAddress}
            // onChange={handleOnChange}
            required
          />
        </InputWrapper>
        <InputWrapper className={cn(styles.formItem, 'col-span-6')}>
          <Label className="sr-only" htmlFor="streetAddressTwo">
            Organization Street Address 2
          </Label>
          <Input
            placeholder="Street Address Line 2"
            id="streetAddressTwo"
            name="streetAddressTwo"
            className={styles.formInput}
            // value={params.streetAddressTwo}
            // onChange={handleOnChange}
          />
        </InputWrapper>
        <InputWrapper className={cn(styles.formItem, 'col-span-2')}>
          <Label className="sr-only" htmlFor="city">
            City
          </Label>
          <Input
            placeholder="City"
            id="city"
            name="city"
            className={styles.formInput}
            // value={params.city}
            // onChange={handleOnChange}
            required
          />
        </InputWrapper>
        <InputWrapper className={cn(styles.formItem, 'col-span-2')}>
          <Label className="sr-only" htmlFor="state">
            State
          </Label>
          <Input
            placeholder="State"
            id="state"
            name="state"
            className={styles.formInput}
            // value={params.state}
            // onChange={handleOnChange}
            required
          />
        </InputWrapper>
        <InputWrapper className={cn(styles.formItem, 'col-span-2')}>
          <Label className="sr-only" htmlFor="zip">
            Zip
          </Label>
          <Input
            placeholder="Zip"
            id="zip"
            name="zip"
            maxLength={5}
            className={styles.formInput}
            // value={params.zip}
            // onChange={handleOnChange}
            required
          />
        </InputWrapper>
        <InputWrapper className={cn(styles.formItem, 'col-span-6')}>
          <Label className="sr-only" htmlFor="default_dealer_number">
            Default Dealer Number
          </Label>
          <Input
            placeholder="Default Dealer Number"
            id="default_dealer_number"
            name="default_dealer_number"
            className={styles.formInput}
            // value={params.default_dealer_number}
            // onChange={handleOnChange}
          />
        </InputWrapper>
      </div>
      <div>
        <button
          className={cn(
            'max-w-md w-full mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600',
            { 'bg-blue-600 text-gray-200 opacity-80': false }
          )}
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
