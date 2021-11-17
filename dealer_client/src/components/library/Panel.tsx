import { FC } from 'react'

const Panel: FC = ({ children }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  )
}

export default Panel
