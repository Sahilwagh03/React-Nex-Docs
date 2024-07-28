import { useTheme } from 'nextra-theme-docs';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiSearchLine } from 'react-icons/ri';
import classNames from 'classnames';
import getPadding from './utils';


const SearchBar = ({ onChange, className, animated ,IconColor }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const {theme,resolvedTheme}=useTheme()

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
        onChange(event.target.value); // Pass the current value directly
    };

    return (
        <>
            {/* {
            animated ? (
                <motion.div
                    className={classNames(
                        'flex flex-row justify-between items-center border border-gray-300 focus:outline-none focus:ring-2',
                        getPadding(isExpanded),
                        className
                    )}
                    initial={{ width: 'fit-content' }}
                    animate={{ width: isExpanded ? '100%' : 'fit-content' }}
                    transition={{ duration: 0.3 }}
                >
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleChange}
                        placeholder="Search..."
                        className={classNames('focus:outline-none w-full', className)}
                        style={{ display: isExpanded ? 'block' : 'none' }} 
                    />
                    <div
                        className="cursor-pointer"
                        onClick={() => setIsExpanded(true)}
                    >
                        <RiSearchLine size={20} className='to-black dark:to-white'/>
                    </div>
                </motion.div>
            ) : */}
            {/* ( */}
                <div className='relative w-fit'>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleChange}
                        placeholder="Search..."
                        className={` py-2 px-4 w-64 focus:outline-none focus:ring-1 text-black border-2 border-gray-300 dark:text-white dark:border-[#383838] dark:border-2 dark:bg-[#1C1C1B] ${className}`}
                    />
                    <div
                        className="cursor-pointer absolute top-[25%] right-[4%]"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <RiSearchLine size={20} color={IconColor}/>
                    </div>
                </div>
            {/* ) */}
        {/* } */}
        </>
    );
};

export default SearchBar;
