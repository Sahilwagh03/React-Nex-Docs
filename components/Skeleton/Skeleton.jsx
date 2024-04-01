import { useTheme } from 'nextra-theme-docs';
import React from 'react';

const Skeleton = ({className="min-w-[300px] h-4 rounded-md"}) => {
  const {theme,resolvedTheme}=useTheme()
  const getSkeletonClasses = ()=>{
    if ((theme === 'dark' || resolvedTheme === 'dark')) {
      return 'bg-[#fafafa1a]';
    } else {
      return 'bg-[#18181b]/10';
    }
  }
  return (
    <div className={`animate-pulse ${getSkeletonClasses(theme,resolvedTheme)} ${className}`}></div>
  );
};

export default Skeleton;
