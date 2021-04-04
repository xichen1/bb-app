import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const SearchPagination = ({ totalPage, setPage, currentPage }) => {

  const changeCurrentPage = (e, value) => {
    e.preventDefault();
    setPage(value);
  }

  return (
    <div style={{ margin: "0 auto", maxWidth: "200px" }}>
      <Pagination count={totalPage} page={currentPage} color="primary" onChange={changeCurrentPage} />
    </div>
  );
}


export default SearchPagination;