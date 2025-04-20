import React from 'react'
import { cn } from '../../lib/utils'

const Button = ({
  title ,
  onClick,
  className="bg-black shadow-md text-white dark:text-black dark:bg-white",
  children,
  ...props
}) => {

  return (
    <button
      className={cn(`h-auto rounded-md px-4 py-2 ${className}`)}
      onClick={onClick}
      {...props}
    >
      {title || children}
    </button>
  )
}

export default Button