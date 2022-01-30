import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

type Iinput = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Input: FC<Iinput> = ({ ...rest }) => {
  return (
    <input
      {...rest}
      className={
        rest.className ||
        'appearance-none px-3 py-2 border border-gray-300 relative focus:outline-none shadow-sm focus:z-10 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm rounded-md'
      }
    />
  )
}

export default Input
