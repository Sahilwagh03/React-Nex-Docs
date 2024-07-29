import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/Tabs/Tabs'
import { FiMonitor, FiTablet, FiSmartphone, FiClipboard, FiCheck } from "react-icons/fi";
import cn from '../utils/classmerger/cn'
import { FaCheck } from 'react-icons/fa';
import { Tooltip, TooltipContent, TooltipTrigger } from '../components/Tooltip/Tooltip'

const ElementsWrapper = ({ code, component, name, showMode=true,componentContainerStyle="" }) => {
  const [size, setSize] = useState('desktop'); // 'desktop', 'tablet', 'smartphone'
  const [copied, setCopied] = useState(false);


  const handleCopyClick = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Revert back after 2 seconds
      })
      .catch((error) => {
        console.error('Error copying command to clipboard:', error);
        // You can handle errors here, like showing an error message
      });
  };

  const handleSizeChange = (newSize) => {
    setSize(newSize);
  }
  return (
    <Tabs defaultValue="preview">
      <div className='flex flex-row items-center justify-between mb-2 '>
        <div className='flex flex-row items-center gap-2'>
          <TabsList className="flex flex-row flex-wrap w-fit p-1 !justify-start rounded-md bg-white text-black dark:bg-[#383838] dark:text-white">
            <TabsTrigger value="preview" className='text-xs !rounded-md'>Preview</TabsTrigger>
            <TabsTrigger value="code" className='text-xs !rounded-md'>Code</TabsTrigger>
          </TabsList>
          <div className='h-6 bg-gray-300 dark:bg-[#27272a] w-[1.5px]' />
          <h1 className='text-sm font-bold'>{name}</h1>
        </div>
        <div className='hidden md:flex flex-row gap-2 items-center'>
          {
            showMode &&
            <>
              <div className='hidden md:flex flex-row p-1 rounded-md gap-5 border-2 border-gray-200 dark:border-[#2E2E2E] dark:border-2'>
                <FiMonitor
                  className={`cursor-pointer w-5 h-5 ${size === 'desktop' ? 'text-blue-500' : ''}`}
                  onClick={() => handleSizeChange('desktop')}
                />
                <FiTablet
                  className={`cursor-pointer w-5 h-5 ${size === 'tablet' ? 'text-blue-500' : ''}`}
                  onClick={() => handleSizeChange('tablet')}
                />
                <FiSmartphone
                  className={`cursor-pointer w-5 h-5 ${size === 'smartphone' ? 'text-blue-500' : ''}`}
                  onClick={() => handleSizeChange('smartphone')}
                />
              </div>
              <div className='h-6 bg-gray-300 dark:bg-[#27272a] w-[1.5px]' />
            </>
          }
          <div className='p-1 rounded-md gap-5 border-2 border-gray-200 dark:border-[#2E2E2E] dark:border-2'>
            <Tooltip position="top">
              <TooltipTrigger>
                {copied ? (
                  <FiCheck className='w-5 h-5 rounded-full' color='#00FF00' />
                ) : (
                  <FiClipboard className='cursor-pointer w-5 h-5' onClick={() => handleCopyClick(code)} />
                )}
              </TooltipTrigger>
              <TooltipContent>
                <p className='text-xs'>Copy</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
      <TabsContent value="preview"
        className={cn('p-0 rounded-md md:py-5 !border-0 md:!border-2 border-gray-300 dark:border-2 dark:border-[#27272a]'
          , size === 'tablet' && 'dark:!bg-[#27272a] !py-0' || size === 'smartphone' && ' !py-0 dark:!bg-[#27272a]' , componentContainerStyle
        )}
      >
        <div className={cn(size === 'desktop' ? 'max-w-full' : size === 'tablet' ? 'max-w-md py-5 dark:bg-[#111111] dark:border-0 border-r-2 border-gray-300' : 'dark:border-0 border-r-2 border-gray-300 px-2 py-5 dark:bg-[#111111] max-w-xs')}>
          {component}
        </div>
      </TabsContent>
      <TabsContent value="code" className='relative p-0 rounded-md !border-0 md:!border-2 border-gray-300 dark:border-2 dark:border-[#27272a]'>
        <pre className='bg-black max-h-[500px] custom-scrollbar !overflow-x-hidden overflow-y-scroll block p-4 text-white  border-2 border-gray-200 rounded-md relative dark:nx-border-neutral-800  dark:bg-zinc-900'>
          <code className="language-js">
            {code.trim()}
          </code>
        </pre>
        <button
          onClick={() => handleCopyClick(code)}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-white hover:bg-black hover:text-zinc-50 absolute right-4 top-4"
          type="button"
          id="copyButton"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          {copied ? (
            <FaCheck className='w-4 h-4 rounded-full' color='#00FF00' />
          ) : (
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
              <path d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>

          )}
          <span className="sr-only">Copy</span>
        </button>
      </TabsContent>
    </Tabs>

  )
}

export default ElementsWrapper