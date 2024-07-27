import React from 'react'
import Button from '../../../Button/Button'
import Link from 'next/link'
const ElementsHero = () => {
    return (
        <div className='py-5 text-center md:text-left items-center md:items-start md:pt-14 md:pb-7 flex flex-col gap-2'>
            <Link className="flex flex-row items-end rounded-lg bg-muted px-3 py-1 text-sm font-medium" href="/Introduction">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-blocks h-4 w-4">
                    <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                    <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
                </svg>
                <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] mx-2 h-4"></div>
                <span className='relative z-10'>Introducing React Nex Elements</span>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
            </Link>
            <div className='flex flex-col gap-3'>
                <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] z-10">Building <span className='gradient-text'>Elements </span>for the Web</h1>
                <p className="max-w-[550px] text-lg font-light z-10">Elegantly designed. Easily integrate into your applications. Open Source.</p>
            </div>
            <div className="flex w-full justify-center md:justify-start items-center space-x-4 py-4 md:pb-4 z-10">
                <Link className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9" href="/">
                    <Button>Explore Components</Button>
                </Link>
            </div>
        </div>
    )
}

export default ElementsHero