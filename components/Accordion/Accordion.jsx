// Accordion.js
import React, { createContext, useContext, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi'; // Importing a chevron down ic

// Context to share data between Accordion components
const AccordionContext = createContext();

const Accordion = ({ children, type = 'single' }) => {
  const [openValue, setOpenValue] = useState(null);

  const toggleItem = (value) => {
    setOpenValue(prev => (prev === value ? null : value));
  };

  return (
    <AccordionContext.Provider value={{ openValue, toggleItem }}>
      <div className={type=='nested' ? 'mt-[1rem]' : ''}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ children }) => {
  return (
    <div className="accordion-item border-b border-gray-200 dark:border-[#27272a]">
      {children}
    </div>
  );
};

const AccordionTrigger = ({ value, children }) => {
  const { openValue, toggleItem } = useContext(AccordionContext);
  const isOpen = openValue === value;

  return (
    <button
      className="accordion-trigger w-full flex justify-between items-center text-left py-4 px-4 bg-transparent focus:outline-none hover:underline font-semibold dark:text-white"
      onClick={() => toggleItem(value)}
    >
      {children}
      <FiChevronDown
        className={`transform transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
      />
    </button>
  );
};

const AccordionContent = ({ value, children }) => {
  const { openValue } = useContext(AccordionContext);
  const isOpen = openValue === value;

  return (
    <div
      className={`overflow-hidden duration-300 text-black dark:text-white text-sm ${isOpen ? 'max-h-96' : 'max-h-0'}`}
    >
      <div className="px-4 pb-4">
        {children}
      </div>
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
