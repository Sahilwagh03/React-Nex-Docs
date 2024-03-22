import { useTheme } from 'next-themes'
import React from 'react'

const Badge = ({className="",children="Badge" ,varient}) => {
  const {theme,resolvedTheme}=useTheme()
  return (
    <div className={`inline-flex w-fit items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold  ${(theme=='dark'|| resolvedTheme=='dark') && !varient ? 'border-transparent' : ''} ${varient=="outline" ? 'bg-transparent text-black border-gray-300' : 'bg-black text-white'} ${className}`}>
      {children}
    </div>
  )
}

export default Badge