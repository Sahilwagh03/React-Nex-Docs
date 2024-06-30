// src/TemplateDetailsSheet.js
import React from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '../../Sheet/Sheet';
import { IoLogoGithub } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";

const TemplateDetailsSheet = ({ children ,src}) => {
  return (
    <Sheet>
      <SheetTrigger>
        {children}
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Template Details</SheetTitle>
        </SheetHeader>
        <div className="mb-4">
          <img 
            src={src}
            alt="Template Preview" 
            className="w-full h-auto rounded-md shadow-md mb-4"
          />
          <SheetDescription>
            This is a detailed description of the template. It includes features, usage instructions, and other relevant information.
          </SheetDescription>
        </div>
        <SheetFooter>
          <a 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center cursor-pointer bg-gray-800 text-white px-4 py-2 rounded-md mb-2 sm:mb-0 sm:ml-2"
          >
            <IoLogoGithub className="mr-2" size={20} />
            GitHub
          </a>
          <a 
            className="flex items-center cursor-pointer bg-white text-black px-4 py-2 rounded-md"
            download
          >
            <FiDownload className="mr-2" size={18} />
            Download
          </a>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default TemplateDetailsSheet;
