import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import Button from '../../Button/Button';
import useGenerateCode from '../../../Hooks/generateCode';
import { Modal, ModalContent, ModalFooter } from '../../Modal/Modal';

const Ai_Modal = ({ isModalOpen, handleCloseModal }) => {
    const [userInput, setUserInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { generateCode, loading, error, data } = useGenerateCode();
    const [copied, setCopied] = useState(false);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = () => {
        if (!userInput.trim()) {
            setErrorMessage('Input cannot be empty');
            return; // Prevent submission if input is empty
        }

        setErrorMessage(''); // Clear any previous error
        generateCode(userInput); // Call the hook to generate code
        setUserInput(''); // Clear input after sending
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(data?.generated_code || '')
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Revert back after 2 seconds
            })
            .catch((error) => {
                console.error('Error copying code to clipboard:', error);
            });
    };

    const cleanedCode = data?.generated_code.replace(/^```(jsx|javascript|typescript|mdx|md)|```$/g, '');

    return (
        <Modal Open={isModalOpen} Close={handleCloseModal}>
            <ModalContent className='!p-0 min-w-full lg:min-w-[40rem]'>
                <h1 className='p-5 text-[2rem] leading-[1.55rem] font-[900] border-b focus:border-b-2 focus:border-black dark:focus:border-b-white border-b-gray-300 dark:border-b-[#383838]'>
                    Nexus AI
                </h1>

                <div className="p-5">
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <div className="w-8 h-8 border-4 border-t-4 border-gray-300 dark:border-gray-600 border-solid rounded-full animate-spin"></div>
                            <p className="ml-2">Generating code...</p>
                        </div>
                    ) : error ? (
                        <p className="text-red-500">Error: {error.message}</p>
                    ) : data ? (
                        <div className="relative">
                            <pre className="p-3 bg-gray-100 custom-scrollbar dark:bg-[#2A2A2A] rounded-md text-sm overflow-auto max-h-[15rem] w-full whitespace-pre-wrap break-words">
                                <code>{cleanedCode}</code>
                            </pre>
                            <button
                                onClick={handleCopyClick}
                                className="inline-flex items-center justify-center absolute right-4 top-4 z-10 w-6 h-6 bg-gray-300 dark:bg-gray-800 rounded-full text-sm"
                                type="button"
                            >
                                {copied ? (
                                    <FaCheck className='w-4 h-4 text-green-500' />
                                ) : (
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                                        <path d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                    </svg>
                                )}
                                <span className="sr-only">Copy</span>
                            </button>
                        </div>
                    ) : (
                        <p className="text-[#a1a1aa]">
                            Nexus AI is here to help you generate optimized code snippets using React-Nex components.
                            Simply enter your prompt and click "Send" to get started.
                        </p>
                    )}
                </div>
                <div className="p-5 flex flex-row items-start gap-2">
                    <div className="w-full h-10">
                        <textarea
                            placeholder="Generate a Product Buy Card..."
                            value={userInput}
                            onChange={handleInputChange}
                            className="w-full h-full custom-scrollbar rounded-md bg-transparent px-3 py-2 text-sm shadow-sm transition-colors border focus:border-2 focus:border-black dark:focus:border-white text-black border-gray-300 dark:border-[#383838] dark:bg-[#1C1C1B] dark:text-white resize-none placeholder:text-muted-foreground"
                        />
                        {errorMessage && <p className="text-red-500 mt-1">{errorMessage}</p>}
                    </div>
                    <Button disable={loading} className="flex justify-center items-center h-10 w-fit bg-black dark:bg-white text-white dark:text-black" onClick={handleSubmit}>
                        {loading ? <div className="loader dark:dark-loader"></div> : 'Send'}
                    </Button>
                </div>
            </ModalContent>
        </Modal>
    );
};

export default Ai_Modal;
