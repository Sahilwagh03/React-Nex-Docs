import React from 'react'

const Input = ({type="email", placeholder="Email" ,className="w-full h-9 rounded-md", value="" , onChange}) => {
  return (
    <input class={`flex bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  focus:outline-none focus:ring-2 text-black border-2 border-gray-300 dark:border-[#383838] dark:border-2 dark:bg-[#1C1C1B] dark:text-white ${className}`} value={value} onChange={(value)=>onChange(value)} placeholder={placeholder} type={type} />
  )
}

export default Input