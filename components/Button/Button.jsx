import React from 'react'

const Button = ({
  title = "Button",
  onClick,
  className="bg-black shadow-md text-white dark:text-black dark:bg-white"
}) => {

  return (
    <button
      className={`h-auto rounded-md px-4 py-2 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button