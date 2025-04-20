import React, { useRef, useEffect } from 'react';
import { cn } from '../../lib/utils';

const Modal = ({ Open, Close, children,className }) => {
  const modalRef = useRef(null);

  // Close the modal if the user clicks outside of the modal content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        Close();
      }
    };
    
    if (Open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [Open, Close]);

  return (
    <>
      {Open && (
        <div className={cn("fixed inset-0 z-50 bg-black/80 flex justify-center items-center",className)}>
          <div ref={modalRef}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

const ModalContent = ({ className , children }) => {
  return (
    <div className={cn('fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg border-2 bg-white text-black dark:bg-[#09090b] dark:text-white dark:border-[#27272a] translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200 sm:rounded-lg flex flex-col gap-2', className)}>
      {children}
    </div>
  );
};

const ModalHeader = ({ children , className}) => {
  return <div className={cn("flex flex-col gap-2",className)}>{children}</div>;
};

const ModalTitle = ({ children , className }) => {
  return <h1 className={cn("text-lg font-semibold",className)}>{children}</h1>;
};

const ModalDescription = ({ children,className }) => {
  return <p className={cn("text-sm text-[#a1a1aa]",className)}>{children}</p>;
};

const ModalFooter = ({ children,className }) => {
  return <div className={cn("flex flex-col md:flex-row gap-4 justify-end",className)}>{children}</div>;
};

export { Modal, ModalContent, ModalTitle, ModalDescription, ModalFooter, ModalHeader };
