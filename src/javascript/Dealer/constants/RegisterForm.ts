import { FormInput } from '../models'

export const registrationInputs: FormInput[] = [
  {
    autoCapitalize: 'on',
    autoComplete: 'given-name',
    label: 'First Name',
    name: 'firstName',
    required: true,
    span: '3'
  },
  {
    autoCapitalize: 'on',
    autoComplete: 'family-name',
    label: 'Last Name',
    name: 'lastName',
    required: true,
    span: '3'
  },
  {
    autoCapitalize: 'on',
    autoComplete: 'email',
    label: 'Email',
    name: 'email',
    required: true,
    span: '6',
    type: 'email'
  },
  {
    label: 'Username',
    name: 'username',
    required: true,
    span: '6'
  },
  {
    autoComplete: 'new-password',
    label: 'Password',
    name: 'password',
    required: true,
    span: '3',
    type: 'password'
  },
  {
    autoComplete: 'new-password',
    label: 'Confirm Password',
    name: 'confirmPassword',
    required: true,
    span: '3',
    type: 'password'
  },
  {
    label: 'Organization Name',
    name: 'orgName',
    required: true,
    span: '6'
  },
  {
    label: 'Street Address',
    name: 'streetAddress',
    required: true,
    span: '6'
  },
  {
    label: 'Street Address Line 2',
    name: 'streetAddressTwo',
    required: false,
    span: '6'
  },
  {
    label: 'City',
    name: 'city',
    required: true,
    span: '2'
  },
  {
    label: 'State',
    name: 'state',
    required: true,
    span: '2'
  },
  {
    label: 'Zip',
    name: 'zip',
    required: true,
    span: '2'
  },
  {
    label: 'Default Dealer Number',
    name: 'dealerNumber',
    required: false,
    span: '6'
  }
]
