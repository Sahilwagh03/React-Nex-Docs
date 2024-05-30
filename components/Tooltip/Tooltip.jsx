import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
const TooltipContext = createContext()

const Tooltip = ({ children }) => {
    const [delayedHovered, setDelayedHovered] = useState(false)
    const handleTooltip = () => {
        setTimeout(() => {
            setDelayedHovered(true)
        }, 500)
    }
    return (
        <TooltipContext.Provider value={{ delayedHovered, setDelayedHovered, handleTooltip }}>
            <div className='relative w-fit'>
                {children}
            </div>
        </TooltipContext.Provider>
    )
}

const TooltipTrigger = ({ children }) => {
    const { setDelayedHovered, handleTooltip } = useContext(TooltipContext)
    return (
        <div onMouseEnter={handleTooltip} onMouseLeave={() => setDelayedHovered(false)} className='w-fit relative'>
            {children}
        </div>
    )
}

const TooltipContent = ({ children }) => {
    const { delayedHovered } = useContext(TooltipContext)
    return (
        <>
            {
                delayedHovered &&
                <div className="absolute inline-block left-1/2 -translate-x-1/2 bottom-[calc(100%+5px)] min-w-max z-50 text-white bg-black dark:text-black dark:bg-white text-xs font-semibold px-2 py-1 rounded-md">
                    {children}
                </div>
            }
        </>
    );
}
export { Tooltip, TooltipTrigger, TooltipContent }