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

// const Tooltip = ({ children, title, position = 'top' }) => {
//     let tooltipPosition, arrowClasses;
  
//     switch (position) {
//       case 'top':
//         tooltipPosition = 'bottom-full mb-2';
//         arrowClasses = 'absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-0 border-t-5 border-t-black border-r-5 border-r-transparent border-b-5 border-b-transparent';
//         break;
//       case 'bottom':
//         tooltipPosition = 'top-full mt-2';
//         arrowClasses = 'absolute left-1/2 transform -translate-x-1/2 top-[-5px] w-0 h-0 border-t-5 border-t-transparent border-r-5 border-r-transparent border-b-5 border-b-black';
//         break;
//       case 'left':
//         tooltipPosition = 'right-full mr-2';
//         arrowClasses = 'absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-5 border-t-transparent border-r-5 border-r-black border-b-5 border-b-transparent';
//         break;
//       case 'right':
//       default:
//         tooltipPosition = 'left-full ml-3';
//         arrowClasses = 'absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-5 border-t-transparent border-r-5 border-r-black border-b-5 border-b-transparent';
//         break;
//     }
  
//     return (
//       <div className='relative flex items-center group'>
//         {children}
//         <div className={`absolute ${tooltipPosition} flex-col items-center hidden group-hover:flex`}>
//           <div className='relative z-10 px-3 py-2 text-xs text-black bg-white dark:text-white dark:bg-black rounded-md shadow-xl'>
//             <span className={arrowClasses}></span>
//             {title}
//           </div>
//         </div>
//       </div>
//     );
//   };

export { Tooltip, TooltipTrigger, TooltipContent };
