import React, { FC } from 'react'

import joinClasses from '../../utils/joinClasses'

type InputWrapperProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  overrideClass?: boolean
}

const InputWrapper: FC<InputWrapperProps> = ({
  children,
  className = '',
  overrideClass = false
}) => {
  return (
    <div
      className={
        overrideClass ? className : joinClasses('rounded-md', className)
      }
    >
      {children}
    </div>
  )
}

export default InputWrapper
