import React, { FC } from 'react'

import joinClasses from '../../utils/joinClasses'

type PillType = {
  overrideClass?: boolean
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>

const Pill: FC<PillType> = ({ overrideClass, className, children }) => {
  return (
    <div>
      <span
        className={
          overrideClass
            ? className
            : joinClasses(
                'inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-blue-200 text-blue-800',
                className || ''
              )
        }
      >
        {children}
      </span>
    </div>
  )
}

export default Pill
