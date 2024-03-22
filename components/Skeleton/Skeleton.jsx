import React from 'react';

const Skeleton = ({className="min-w-[300px] h-4 rounded-md"}) => {
  return (
    <div className={`animate-pulse bg-[#18181b]/10 ${className}`}></div>
  );
};

export default Skeleton;
