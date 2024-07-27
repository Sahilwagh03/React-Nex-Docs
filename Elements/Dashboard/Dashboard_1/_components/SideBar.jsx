import React, { createContext, useContext, useState } from 'react';
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';

const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);

const SideBar = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isExpanded, toggleSidebar }}>
      <div className={`flex flex-col items-center rounded-lg h-screen bg-white dark:bg-[#09090b] transition-all duration-300 ${isExpanded ? 'w-64' : 'w-20'}`}>
        <div className={`border-b-2 border-gray-200 dark:border-[#2E2E2E] p-4 w-full flex ${isExpanded ? 'justify-start' : 'justify-center'}`}>
          <img src='https://seeklogo.com/images/M/microsoft-365-copilot-logo-44BA459F18-seeklogo.com.png' alt='logo' className='w-8' />
        </div>
        <div className='px-2 py-6 flex flex-col items-center gap-5 w-full'>
          <button onClick={toggleSidebar} className='px-4 py-4'>
            {isExpanded ? <LuArrowLeft className='w-6 h-6' /> : <LuArrowRight className='w-6 h-6' />}
          </button>
          {children}
        </div>
      </div>
    </SidebarContext.Provider>
  );
};

const SideBarItem = ({ icon, title }) => {
  const { isExpanded } = useSidebar();

  return (
    <div className={`flex flex-row gap-4 items-center w-full px-4 py-4 hover:bg-gray-200 dark:hover:bg-[#2E2E2E] rounded-lg cursor-pointer ${isExpanded ? 'justify-start' : 'justify-center'}`}>
      <div className='text-gray-800 dark:text-gray-200'>{icon}</div>
      {isExpanded && <span className='text-lg text-gray-800 dark:text-gray-200'>{title}</span>}
    </div>
  );
};

export { SideBar, SideBarItem };
