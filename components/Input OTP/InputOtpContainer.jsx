import React from 'react'
import {cn} from '../../lib/utils'
const InputOtpContainer = ({ children, className }) => {
  return (
    <div className={cn('flex flex-row gap-1 cursor-pointer', className)}>
      {children}
    </div>
  )
}

export default InputOtpContainer