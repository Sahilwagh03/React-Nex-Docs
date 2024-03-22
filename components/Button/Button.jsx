import React from 'react'
import { useTheme } from 'next-themes'
import { getColorTheme } from '../../utils/ColorTheme/getColorTheme'

const Button = ({
  title = "Button",
  onClick,
  className=""
}) => {
  const {theme,resolvedTheme}=useTheme()
  const color_scheme = getColorTheme(theme,resolvedTheme,className)
  return (
    <button
      className={`h-auto  rounded-md px-[1rem] py-[0.5rem] shadow-md ${color_scheme} ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button