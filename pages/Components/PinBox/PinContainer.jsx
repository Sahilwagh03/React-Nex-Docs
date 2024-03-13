import React from 'react'

const PinContainer = ({children,className}) => {
  return (
    <div className={`flex flex-row gap-1 cursor-pointer ${className}`}>
        {children}
    </div>
  )
}

export default PinContainer