import React from 'react'
import { TypewriterEffect, TypewriterEffectSmooth } from '../TypewriterEffect/TypewriterEffect';

const TypewriterEffectSmoothWrapper = () => {
    const words = [
        { text: "Create", className: "text-green-500 dark:text-green-400" }, // Green for light themes
        { text: "Stunning" },
        { text: "UIs" },
        { text: "Fast." },
    ];
    return (
        <>
            <TypewriterEffectSmooth words={words} cursorClassName={'bg-green-400'} />
        </>
    )
}

const TypewriterEffectWrapper = ()=>{
    const words = [
        { text: "Create", className: "text-green-500 dark:text-green-400" }, // Green for light themes
        { text: "Stunning" },
        { text: "UIs" },
        { text: "Fast." },
    ];
    return (
        <>
            <TypewriterEffect words={words} cursorClassName={'bg-green-400'} />
        </>
    )
}

export { TypewriterEffectSmoothWrapper , TypewriterEffectWrapper };