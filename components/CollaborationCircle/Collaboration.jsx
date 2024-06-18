import React from 'react';

const CentralIcon = ({ icon, alt, children, width = 48, height = 48 }) => (
    <div className="flex w-60 aspect-square m-auto border border-[#b5b5b5] rounded-full dark:border-[#252427]">
        <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full dark:bg-transparent">
            <div className="flex items-center justify-center w-full h-full bg-[#0e0c15] rounded-full dark:bg-[#252427]">
                {children ? (
                    children
                ) : (
                    <img src={icon} width={width} height={height} alt={alt} />
                )}
            </div>
        </div>
    </div>
);

const CollabIcon = ({ icon, width, height, index, alt }) => {
    return(
    <li
        className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}
        style={{ transform: `rotate(${index * 45}deg)` }}
    >
        <div
            className="relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] border border-n-1/15 rounded-xl bg-[#e5e7eb] dark:bg-[#252427] dark:border-[#252427]"
            style={{ transform: `rotate(${-index * 45}deg)` }}
        >
            <img className="m-auto" width={width} height={height} alt={alt} src={icon} />
        </div>
    </li>
)
};

const CollabIconContainer = ({ children }) => (
    <ul>
        {children}
    </ul>
);


const Collaboration = ({ children }) => (
    <div className="relative left-1/2 flex w-[22rem] aspect-square border border-[#b5b5b5] rounded-full -translate-x-1/2 scale-75 md:scale-100 dark:bg-transparent dark:border-[#252427]">
        {children}
    </div>
);

export { Collaboration, CollabIcon, CentralIcon, CollabIconContainer };
