import React, { useContext, useState, createContext } from 'react';

const TooltipContext = createContext();

const Tooltip = ({ children , position='top'}) => {
    const [delayedHovered, setDelayedHovered] = useState(false);
    const handleTooltip = () => {
        setTimeout(() => {
            setDelayedHovered(true);
        }, 500);
    };
    return (
        <TooltipContext.Provider value={{ delayedHovered, setDelayedHovered, handleTooltip ,position}}>
            <div className='relative w-fit'>
                {children}
            </div>
        </TooltipContext.Provider>
    );
};

const TooltipTrigger = ({ children }) => {
    const { setDelayedHovered, handleTooltip } = useContext(TooltipContext);
    return (
        <div onMouseEnter={handleTooltip} onMouseLeave={() => setDelayedHovered(false)} className='w-fit relative'>
            {children}
        </div>
    );
};

const TooltipContent = ({ children }) => {
    const { delayedHovered , position} = useContext(TooltipContext);
    let positionClasses;

    switch (position) {
        case 'top':
            positionClasses = 'left-1/2 -translate-x-1/2 bottom-[calc(100%+5px)]';
            break;
        case 'bottom':
            positionClasses = 'left-1/2 -translate-x-1/2 top-[calc(100%+5px)]';
            break;
        case 'left':
            positionClasses = 'right-[calc(100%+5px)] top-1/2 -translate-y-1/2';
            break;
        case 'right':
            positionClasses = 'left-[calc(100%+5px)] top-1/2 -translate-y-1/2';
            break;
        default:
            positionClasses = 'left-1/2 -translate-x-1/2 bottom-[calc(100%+5px)]';
    }

    return (
        <>
            {
                delayedHovered &&
                <div className={`absolute inline-block ${positionClasses} min-w-max z-50 text-white bg-black dark:text-black dark:bg-white text-xs font-semibold px-2 py-1 rounded-md`}>
                    {children}
                </div>
            }
        </>
    );
};

export { Tooltip, TooltipTrigger, TooltipContent };
