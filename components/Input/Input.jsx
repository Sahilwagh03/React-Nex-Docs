import { useTheme } from 'nextra-theme-docs';
import React, { useEffect } from 'react'

const Input = ({ type = "email", placeholder = "Email", className = "w-full h-9 rounded-md", value = "", onChange }) => {
  const { theme, resolvedTheme } = useTheme()
  const getInputClasses = () => {
    if ((theme === 'dark' || resolvedTheme === 'dark') && className !== "") {
      return 'border-[#383838] border-2 bg-[#1C1C1B]';
    } else {
      return 'text-black border-2 border-gray-300';
    }
  }

  return (
    <input className={`flex px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  focus:outline-none focus:ring-2 ${getInputClasses(theme, resolvedTheme)} ${className}`} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} type={type} />
  )
}

export default Input