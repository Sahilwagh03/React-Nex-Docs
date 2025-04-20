import React from 'react'
import AvatarImage from './AvatarImage'
import { cn } from '../../lib/utils'
const Avatar = ({ src , alt, className , size }) => {
    return (
    <div className={cn('w-auto h-auto rounded-full')}>
            <AvatarImage src={src} size={size} className={className} alt={alt} />
        </div>
    )
}

export default Avatar