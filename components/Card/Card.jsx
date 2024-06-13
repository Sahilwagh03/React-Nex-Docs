import { useTheme } from 'next-themes'
import React from 'react';

const Card = ({ children, className = "" ,bgColor=''}) => {
  const { theme, resolvedTheme } = useTheme()
  const getCardClasses = (theme,resolvedTheme) => {
    if ((theme === 'dark' || resolvedTheme === 'dark') ) {
      return `border-2 border-[#2E2E2E] ${bgColor} `;
    } else {
      return 'bg-white border-2 border-gray-200 text-black';
    }
  }
  return (
    <div className={`shadow-md rounded-lg p-4 ${getCardClasses(theme,resolvedTheme)} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
