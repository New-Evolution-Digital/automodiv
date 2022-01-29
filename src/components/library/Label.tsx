import React, { FC } from 'react'

type ILabel = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  children?: React.ReactNode
}

const Label: FC<ILabel> = ({ children, ...rest }) => {
  return (
    <label
      {...rest}
      className={rest.className || 'block text-sm font-medium text-gray-700'}
    >
      {children}
    </label>
  )
}

export default Label
