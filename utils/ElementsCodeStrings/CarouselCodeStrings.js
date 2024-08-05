export const Carousel_01 = `
import React from 'react'
import { motion } from 'framer-motion'
import acme from '../../assets/acme.svg'
import apex from '../../assets/apex.svg'
import celestia from '../../assets/celestia.svg'
import echo from '../../assets/echo.svg'
import pulse from '../../assets/pulse.svg'
import quantum from '../../assets/quantum.svg'
import Image from 'next/image'

const logos = [
    { src: acme, alt: 'Acme Logo' },
    { src: apex, alt: 'Apex Logo' },
    { src: quantum, alt: 'Quantum.svg Logo' },
    { src: celestia, alt: 'Celestia Logo' },
    { src: echo, alt: 'Eco Logo' },
    { src: pulse, alt: 'Pulse Logo' },
]

const Carousel_1 = () => {
    return (
        <div className="flex overflow-hidden before:content-[''] after:content-[''] before:absolute after:absolute relative before:h-full after:h-full before:w-5 after:w-5 after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear_gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear_gradient(to_left,#000,rgb(0,0,0,0))]">
            <motion.div
                transition={{
                    duration: 15,
                    ease: 'linear',
                    repeat: Infinity
                }}
                initial={{ translateX: '0%' }}
                animate={{ translateX: '-50%' }}
                className='flex flex-none gap-16 pr-16'>
                {
                    logos.map(({ src, alt }) => (
                        <Image src={src} alt={alt} className='flex-none h-8 w-auto' />
                    ))
                }
                {
                    logos.map(({ src, alt }) => (
                        <Image src={src} alt={alt} className='flex-none h-8 w-auto' />
                    ))
                }
            </motion.div>
        </div>
    )
}

export default Carousel_1
`