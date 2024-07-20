import React, { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

const Tabs = ({
    children,
    className = "w-full",
    defaultValue = ""
}) => {

    const [activeTab, setActiveTab] = useState(defaultValue)
    const handleTabClick = (value) => {
        setActiveTab(value);
    };

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab, handleTabClick }}>
            <div className={`flex justify-center gap-2 flex-col ${className}`}>
                {children}
            </div>
        </TabsContext.Provider>
    )
}

const TabsList = ({
    children,
    className = "p-1 rounded-md bg-white text-black dark:bg-[#27272a] text-white",
}) => {
    return (
        <div className={`flex justify-center ${className}`}>
            {children}
        </div>
    )
}

const TabsContent = ({ children, className = "w-full rounded-md text-black dark:text-white min-h-[300px] border-2 border-gray-300 dark:border-2 dark:border-[#27272a]", value }) => {
    const context = useContext(TabsContext);
    const isActive = context.activeTab === value; // Check if active
  
    return (
      <div className={`${className} ${isActive ? '' : 'hidden'}`}>
        {children}
      </div>
    );
  }

const TabsTrigger = ({
    children,
    className = "w-full",
    value,
    activeStyle=""
}) => {
    const context = useContext(TabsContext);
    const isActive = context.activeTab === value;
  
    const handleClick = () => {
      context.handleTabClick(value);
    };

    const activeTabClass = () =>{
        if(activeStyle.length!=0){
            return `${isActive && activeStyle}`
        }
        else{
            return `${isActive ? 'text-black dark:text-white dark:bg-black' : 'text-[#a1a1aa] dark:text-slate-400'}`
        }
    }

    return (
        <button onClick={()=>handleClick(value)} className={`text-sm font-light py-1.5 px-3 md:text-md font-semibold rounded-sm focus:outline-none ${activeTabClass()} ${className}`}>
            {children}
        </button>
    )
}

export { Tabs, TabsList, TabsContent, TabsTrigger }