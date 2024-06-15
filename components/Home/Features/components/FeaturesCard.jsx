import React from 'react'

const FeaturesCard = ({ title, icon, description }) => {
    return (
        <div className="flex flex-col rounded-lg shadow-medium relative overflow-hidden h-auto text-foreground box-border outline-none shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]" tabindex="-1">
            <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
                <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80">
                    {icon}
                </div>
                <p className="text-base font-semibold">{title}</p>
            </div>
            <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
                <p className="font-normal text-base text-default-500">{description}</p>
            </div>
        </div>
    )
}

export default FeaturesCard