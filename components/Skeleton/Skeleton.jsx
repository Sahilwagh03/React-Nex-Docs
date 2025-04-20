import { useTheme } from 'nextra-theme-docs';
import React from 'react';
import { cn } from '../../lib/utils';
const Skeleton = ({className="min-w-[300px] h-4 rounded-md"}) => {
  return (
    <div className={cn('animate-pulse bg-[#18181b]/10 dark:bg-[#fafafa1a]' , className)}></div>
  );
};

export default Skeleton;
