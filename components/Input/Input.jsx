import React from 'react'

const Input = ({type="email", placeholder="Email" ,className="w-full h-9 rounded-md", value="" , onChange}) => {
  return (
    <input class={`flex  border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  focus:outline-none focus:ring-2 ${className}`} value={value} onChange={(value)=>onChange(value)} placeholder={placeholder} type={type} />
  )
}

export default Input