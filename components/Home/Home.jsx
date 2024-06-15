import React, { useEffect, useState } from 'react'
import Hero from './Hero/Hero'
import { useTheme } from 'nextra-theme-docs'
import Features from './Features/Features'
import TechStack from './TechStack/TechStack'
import TemplateSection from './Template_Section/TemplateSection'
const Home = () => {
    const { theme, resolvedTheme } = useTheme()
    const [darkStyle, setDarkStyle] = useState('')
    useEffect(() => {
        if (theme == 'dark') {
            setDarkStyle('bg-dots-dark-mode')
        }
    }, [theme])
    return (
        <main className='h-full'>
            <div className={`${(theme == 'dark' || resolvedTheme == 'dark') ? darkStyle : 'bg-dots'} md:h-[90vh]`}>
                <Hero />
            </div>
            <Features />
            <TechStack/>
            <TemplateSection/>
        </main>
    )
}

export default Home