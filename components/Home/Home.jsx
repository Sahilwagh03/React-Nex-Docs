import React, { useEffect, useState } from 'react'
import Hero from './Hero/Hero'
import { useTheme } from 'nextra-theme-docs'
import Features from './Features/Features'
import TechStack from './TechStack/TechStack'
import TemplateSection from './Template_Section/TemplateSection'
import CallToAction from './CTA/CallToAction'
import Commuity from './Community/Commuity'
const Home = () => {
    const { theme, resolvedTheme } = useTheme()
    const [darkStyle, setDarkStyle] = useState('')
    useEffect(() => {
        if (theme == 'dark') {
            setDarkStyle('bg-dots-dark-mode')
        }
    }, [theme])
    return (
        <main className='h-auto'>
            <div className={`${(theme == 'dark' || resolvedTheme == 'dark') ? darkStyle : 'bg-dots'} relative h-auto`}>
                <Hero />
            </div>
            <Features />
            <TechStack/>
            <TemplateSection/>
            <CallToAction/>
            <Commuity/>
        </main>
    )
}

export default Home