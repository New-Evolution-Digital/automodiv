import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

import cn from 'classnames'

type Iinput = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { overrideClass?: boolean }

const Input: FC<Iinput> = ({ overrideClass = false, ...rest }) => {
  return (
    <input
      {...rest}
      className={cn(
        {
          'appearance-none px-3 py-2 border border-gray-300 relative focus:outline-none shadow-sm focus:z-10 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm rounded-md':
            !overrideClass
        },
        rest.className
      )}
    />
  )
}

export default Input
