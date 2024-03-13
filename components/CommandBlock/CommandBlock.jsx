import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";

const CommandBlock = ({ command }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(command)
      .then(() => {
        console.log('Command copied to clipboard:', command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Revert back after 2 seconds
      })
      .catch((error) => {
        console.error('Error copying command to clipboard:', error);
        // You can handle errors here, like showing an error message
      });
  };

  return (
    <div className='relative'>
      <pre className="mb-4 mt-6  max-h-[650px] w-full overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900" data-language="bash" data-theme="default">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-lg" data-language="bash" data-theme="default">
          <span className="line">
            <span style={{ color: 'rgb(255, 255, 255)' }}>{command}</span>
          </span>
        </code>
      </pre>
      <button
        onClick={handleCopyClick}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4"
        type="button"
        id="copyButton"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
      >
        {copied ? (
          <FaCheck className='w-6 h-6 rounded-full' color='#00FF00'/>
        ) : (
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
            <path d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
          </svg>
        )}
        <span className="sr-only">Copy</span>
      </button>
    </div>
  );
};

export default CommandBlock;
