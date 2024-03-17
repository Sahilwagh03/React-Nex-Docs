import React from 'react'

const Button = ({
  title = "Button",
  onClick,
  className
}) => {

  return (
    <button
      className={`h-auto bg-black text-white rounded-md px-[1rem] py-[0.5rem] shadow-md ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button