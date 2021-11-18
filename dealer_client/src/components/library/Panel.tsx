import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

import joinClasses from '../../utils/joinClasses'

type PanelType = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  overrideClass?: boolean
}

const Panel: FC<PanelType> = ({
  children,
  className,
  overrideClass = false,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={
        overrideClass
          ? className
          : joinClasses(
              'bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6',
              className || ''
            )
      }
    >
      {children}
    </div>
  )
}

export default Panel
