import React from 'react';
import { getSizeClass } from './utils'; // Import the getSizeClass function
import { cn } from '../../lib/utils';

const AvatarImage = ({ src="https://bit.ly/dan-abramov", alt="user", className="", size = 'md' }) => {
  const sizeClass = getSizeClass(size); // Get the size class based on the 'size' prop

  return (
    <img src={src} alt={alt} className={cn(`rounded-full ${sizeClass} ${className}`)} />
  );
}

export default AvatarImage;
