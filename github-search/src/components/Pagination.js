import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const hasPrevious = currentPage > 1;
    const hasNext = currentPage < totalPages;

    const generatePages = () => {
        if (totalPages <= 3) {
            return [...Array(totalPages).keys()].map(n => n + 1);
        }

        if (currentPage === 1 || currentPage === 2) {
            return [1, 2, 3];
        } else if (currentPage === totalPages || currentPage === totalPages - 1) {
            return [totalPages - 2, totalPages - 1, totalPages];
        } else {
            return [currentPage - 1, currentPage, currentPage + 1];
        }
    };

    return (
        <div className="pagination">
            {hasPrevious && (
                <button
                    className="prev"
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    Previous
                </button>
            )}

            {generatePages().map(page => (
                <button
                    key={page}
                    className={page === currentPage ? 'active' : ''}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}

            {hasNext && (
                <button
                    className="next"
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    Next
                </button>
            )}
        </div>
    );
};

export default Pagination;
