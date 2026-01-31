import React from 'react';
import './style.css';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className='pagination'>
      <ul className='pagination-list'>
        <li className='pagination-item'>
          <button
            className={`btn pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>
        </li>

        {pages.slice(0, 4).map(page => (
          <li key={page} className='pagination-item'>
            <button
              className={`btn pagination-btn ${currentPage === page ? 'active' : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}

        <li className='pagination-item'>
          <button
            className={`btn pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
