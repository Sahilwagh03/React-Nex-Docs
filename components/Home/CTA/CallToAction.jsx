import React from 'react'
import { FiPlay } from 'react-icons/fi'
import { FaArrowTrendUp } from "react-icons/fa6";
import FeaturesCard from '../Features/components/FeaturesCard'

const CallToAction = () => {

    const CardData = [
        {
            title: "Get Started",
            description: "Build beautiful and accessible UIs effortlessly with React-Nex components.",
            icon: <FiPlay size={28} className=' text-[#6e7af7]'/>,
            href:'/Introduction'
        },
        {
            title: "Level Up Your UI",
            description: "Craft professional and responsive user interfaces with React-Nex's curated component library.",
            icon: <FaArrowTrendUp size={26} className=' text-[#6e7af7]'/>,
            href:'/'
        }
    ]
    return (
        <section className="relative z-10 flex-col gap-2 bg-transparent flex justify-center items-center mt-16 lg:mt-26">
            <div className="w-full max-w-7xl py-10 grid grid-cols-12 gap-6 md:gap-0 z-20">
                <div className="flex flex-col gap-2 col-span-12 md:col-span-6">
                    <div className="flex flex-col">
                        <h1 className="tracking-tight font-semibold text-[2.5rem] lg:text-5xl inline">Design the Web</h1>
                        <div>
                            <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">Shape </h1>
                            <h1 className="tracking-tight font-semibold from-[#FF1CF7] to-[#b249f8] text-[2.5rem] lg:text-5xl gradient-text inline">Experiences</h1>
                        </div>
                    </div>
                    <p className="w-full my-2 font-normal text-default-500 block max-w-full md:w-full text-base lg:text-lg">Experience it firsthand and show us your creations!</p>
                    <div className="flex flex-row gap-3 justify-start">
                        <a className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 gap-2 rounded-full [&amp;>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-secondary text-secondary-foreground data-[hover=true]:opacity-hover text-sm" role="button" tabIndex="0" href="/Introduction">
                            Get Started
                            <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em" className="group-data-[hover=true]:translate-x-0.5 outline-none transition-transform" tabIndex="-1">
                                <path d="M16.835 6.91821L23.9166 13.9999L16.835 21.0815" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"></path>
                                <path d="M4.08325 14H23.7183" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"></path>
                            </svg>
                        </a>
                        <a className="tap-highlight-transparent no-underline hover:opacity-80 active:opacity-disabled transition-opacity z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium px-4 min-w-20 h-10 gap-2 rounded-full [&amp;>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent border-default text-foreground data-[hover=true]:opacity-hover text-sm" href="https://github.com/Sahilwagh03/React-Nex-Docs" target="_blank" rel="noopener noreferrer" tabIndex="0" role="button">
                            <svg height="24" viewBox="0 0 24 24" width="24" aria-hidden="true" focusable="false" tabIndex="-1">
                                <path clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 012.496-.336 9.554 9.554 0 012.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                            Github
                        </a>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2">
                        {
                            CardData.map(({ title, description, icon ,href}, index) => (
                                <FeaturesCard title={title} description={description} icon={icon} key={index} href={href}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction
