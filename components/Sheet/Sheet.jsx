// src/Sheet.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { IoCloseOutline } from "react-icons/io5";

const SheetContext = createContext();

const Sheet = ({ children }) => {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const openSheet = () => setSheetOpen(true);
  const closeSheet = () => setSheetOpen(false);

  useEffect(() => {
    if (isSheetOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isSheetOpen]);

  return (
    <SheetContext.Provider value={{ isSheetOpen, openSheet, closeSheet }}>
      {children}
    </SheetContext.Provider>
  );
};

const useSheet = () => useContext(SheetContext);

const SheetTrigger = ({ children }) => {
  const { openSheet } = useSheet();
  return (
    <div onClick={openSheet}>
      {children}
    </div>
  );
};

const SheetContent = ({ side = 'right', children }) => {
  const { isSheetOpen, closeSheet } = useSheet();
  
  const sideClasses = {
    top: {
      initial: "-translate-y-full",
      open: "translate-y-0",
      position: "inset-x-0 top-0",
      dimension: "w-full h-auto max-h-screen",
      border: "border-b border-[#27272a]"
    },
    bottom: {
      initial: "translate-y-full",
      open: "translate-y-0",
      position: "inset-x-0 bottom-0",
      dimension: "w-full h-auto max-h-screen",
      border: "border-t border-[#27272a]"
    },
    left: {
      initial: "-translate-x-full",
      open: "translate-x-0",
      position: "inset-y-0 left-0",
      dimension: "h-full max-w-sm",
      border: "border-r border-[#27272a]"
    },
    right: {
      initial: "translate-x-full",
      open: "translate-x-0",
      position: "inset-y-0 right-0",
      dimension: "h-full max-w-sm",
      border: "border-l border-[#27272a]"
    }
  };

  const selectedSide = sideClasses[side] || sideClasses.right;

  return (
    <>
      {isSheetOpen && (
        <div className="fixed inset-0 z-40 bg-black opacity-70 dark:opacity-80" onClick={closeSheet}></div>
      )}
      <div className={`fixed ${selectedSide.position} z-50 transform transition-transform ${isSheetOpen ? selectedSide.open : selectedSide.initial} duration-500 bg-white dark:bg-[#09090b] ${selectedSide.dimension} ${selectedSide.border} shadow-lg p-6`}>
        <button onClick={closeSheet} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <IoCloseOutline size={20} />
        </button>
        {children}
      </div>
    </>
  );
};

const SheetHeader = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

const SheetTitle = ({ children }) => {
  return <h2 className="text-lg font-bold mb-2 dark:text-white">{children}</h2>;
};

const SheetDescription = ({ children }) => {
  return <p className="text-sm text-gray-600 dark:">{children}</p>;
};

const SheetFooter = ({ children }) => {
  return <div className="mt-4 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">{children}</div>;
};

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter };