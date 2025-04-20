import React from 'react';
import { cn } from '../../lib/utils';

const Card = ({ children, className = "" }) => {
  return (
    <div className={cn(`shadow-md rounded-lg p-4 border-2 border-gray-200 dark:border-[#2E2E2E] dark:border-2 ${className}`)}>
      {children}
    </div>
  );
};

const CardBody = ({ children, className = "" }) => {
  return <div className={cn('mb-4 flex flex-col gap-4', className)}>{children}</div>;
};

const CardDescription = ({ children, className = "" }) => {
  return <p className={cn('text-gray-600 mb-2', className)}>{children}</p>;
};

const CardFooter = ({ children, className = "" }) => {
  return <div className={cb(className)}>{children}</div>;
};

const CardHeader = ({ children, className = "" }) => {
  return <div className={cn('mb-4 flex flex-col', className)}>{children}</div>;
};

const CardTitle = ({ children, className = "" }) => {
  return <h2 className={cn('text-xl font-bold mb-2', className)}>{children}</h2>;
};


export { Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle };
