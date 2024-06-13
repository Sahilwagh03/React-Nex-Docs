import React, { useEffect, useState } from 'react'
import Hero from './Hero/Hero'
import { useTheme } from 'nextra-theme-docs'

const Home = () => {
    const { theme, resolvedTheme } = useTheme()
    const [darkStyle,setDarkStyle]=useState('')
    useEffect(()=>{
        if(theme=='dark'){
            setDarkStyle('bg-dots-dark-mode')
        }
    },[theme])
    return (
        <main className={`${(theme == 'dark' || resolvedTheme == 'dark') ? darkStyle : 'bg-dots'}`}>
            <Hero />
        </main>
    )
}

export default Home