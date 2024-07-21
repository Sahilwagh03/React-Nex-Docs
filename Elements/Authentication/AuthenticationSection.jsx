import React, { useState } from 'react'
import Authentication_1 from './_components/Authentication_1'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/Tabs/Tabs'
import { FiMonitor, FiTablet, FiSmartphone } from "react-icons/fi";
import { Authentication_01 } from '../../utils/ElementsCodeStrings/AuthenticationCodeString';
import cn from '../../utils/classmerger/cn'

const AuthenticationSection = () => {
  const [size, setSize] = useState('desktop'); // 'desktop', 'tablet', 'smartphone'

  const handleSizeChange = (newSize) => {
    setSize(newSize);
  }
  return (
    <section>
      <Tabs defaultValue="preview">
        <div className='flex flex-row items-center justify-between mb-2 '>
          <div className='flex flex-row items-center gap-2'>
            <TabsList className="flex flex-row flex-wrap w-fit  p-1 !justify-start rounded-md bg-white text-black dark:bg-[#383838] dark:text-white">
              <TabsTrigger value="preview" className='text-xs !rounded-md'>Preview</TabsTrigger>
              <TabsTrigger value="code" className='text-xs !rounded-md'>Code</TabsTrigger>
            </TabsList>
            <div className='h-6 bg-gray-300 dark:bg-[#27272a] w-[1.5px]' />
            <h1 className='text-sm font-bold'>Authentication-01</h1>
          </div>
          <div className='hidden md:flex flex-row gap-5'>
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
        </div>
        <TabsContent value="preview"
          className={cn('p-0 rounded-md md:py-5 !border-0 md:!border-2 border-gray-300 dark:border-2 dark:border-[#27272a]'
            , size === 'tablet' && 'dark:!bg-[#27272a] !py-0' || size === 'smartphone' && ' !py-0 dark:!bg-[#27272a]'
          )}
        >
          <div className={cn(size === 'desktop' ? 'max-w-full' : size === 'tablet' ? 'max-w-md py-5 dark:bg-[#111111]' : 'px-2 py-5 dark:bg-[#111111] max-w-xs')}>
            <Authentication_1 />
          </div>
        </TabsContent>
        <TabsContent value="code" className='p-0 rounded-md !border-0 md:!border-2 border-gray-300 dark:border-2 dark:border-[#27272a]'>
          <pre className='bg-black max-h-[500px] custom-scrollbar !overflow-x-hidden overflow-y-scroll block p-4 text-white  border-2 border-gray-200 rounded-md relative dark:nx-border-neutral-800  dark:bg-zinc-900'>
            <code className="language-js">
              {Authentication_01.trim()}
            </code>
          </pre>
        </TabsContent>
      </Tabs>


    </section>
  )
}

export default AuthenticationSection