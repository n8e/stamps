import { useEffect, useState } from 'react';
import './styles.css';

const FolderNavigation = ({ page, handlePageChange }) => {
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    // generate array of page numbers before page and after page
    const newPageNumbers = [];
    let leftMax = (page - 3) < 1 ? 1 : page - 3,
      rightMax = (page - 3) < 1 ? page + 3 + Math.abs(page - 3) : page + 3;
    for (let i = leftMax; i <= rightMax; i++) {
      newPageNumbers.push(i);
    }

    setPageNumbers(newPageNumbers);
  }, [page]);

  return (
    <div className='nav-container'>
      <button className='nav-button' onClick={() => page > 0 && handlePageChange(page - 1)}>Previous</button>
      {pageNumbers.map((num, idx) => {
        return (
          <div key={idx} onClick={() => handlePageChange(num)} className={`nav-page-number ${num === page ? 'nav-page-number-active' : '' }`}>{num}</div>
        )
      })}
      <button className='nav-button' onClick={() => handlePageChange(page + 1)}>Next</button>
    </div>
  )
}

export default FolderNavigation;