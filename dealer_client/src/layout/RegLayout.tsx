import React, { FC } from 'react'

const RegLayout: FC = ({ children }) => {
  return (
    <div className="relative flex-auto flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {children}
    </div>
  )
}

export default RegLayout
