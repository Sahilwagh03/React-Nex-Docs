import React, { useState } from 'react';
import PaginationItem from './PaginationItem';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ totalItems = 5, className = "", max = 0 }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const pageCount = totalItems;
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < pageCount) {
            setCurrentPage(currentPage + 1);
        }
    };


    return (

        <div className="flex justify-center items-center gap-1">
            <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-md focus:outline-none flex items-center gap-2"
            >
                <FaChevronLeft /> Previous
            </button>
            <div className='gap-1 flex flex-row'>
                <PaginationItem pageCount={pageCount} currentPage={currentPage} setCurrentPage={(data) => setCurrentPage(data)} className={className} />
            </div>
            <button
                onClick={handleNextPage}
                disabled={currentPage === pageCount}
                className="px-4 py-2 rounded-md focus:outline-none flex items-center gap-2"
            >
                Next <FaChevronRight />
            </button>
        </div>

    );

};



export default Pagination;