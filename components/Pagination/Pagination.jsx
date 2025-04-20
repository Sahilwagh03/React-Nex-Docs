import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { cn } from '../../lib/utils'
const Pagination = ({ totalItems = 5, className = "", max, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const pageCount = (max && totalItems / max) || totalItems

    useEffect(() => {
        if (onPageChange) {
            onPageChange(currentPage);
        }
    }, [currentPage, onPageChange]);


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
                className="px-4 py-2 rounded-md focus:outline-none flex items-center gap-1"
            >
                <FaChevronLeft /> Previous
            </button>
            <div className='gap-1 flex flex-row'>
                <PaginationItem pageCount={pageCount} currentPage={currentPage} setCurrentPage={(data) => setCurrentPage(data)} className={className} />
            </div>
            <button
                onClick={handleNextPage}
                disabled={currentPage === pageCount}
                className="px-4 py-2 rounded-md focus:outline-none flex items-center gap-1"
            >
                Next <FaChevronRight />
            </button>
        </div>

    );

};


const PaginationItem = ({ pageCount, className, currentPage, setCurrentPage }) => {
    const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

    return pageNumbers.map((pageNumber) => (
        <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={cn('px-4 py-2 rounded-md focus:outline-none border-2', currentPage === pageNumber ? 'border-gray-300' : 'border-transparent', className)}
        >
            {pageNumber}
        </button>
    ));

};

export { Pagination, PaginationItem };