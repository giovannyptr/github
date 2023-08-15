import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [];

  for (let i = 1; i <= Math.min(3, totalPages); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map(page => (
        <button 
          key={page}
          className={page === currentPage ? 'active' : ''}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
