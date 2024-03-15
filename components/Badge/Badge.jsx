import React from 'react'

const Badge = ({className="",children="Badge" ,varient}) => {
  return (
    <div className={`inline-flex w-fit items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold ${varient=="outline" ? 'bg-transparent text-black border-gray-300' : 'bg-black text-white'} ${className}`}>
      {children}
    </div>
  )
}

export default Badge