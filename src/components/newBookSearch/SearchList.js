import React, { useState, useEffect } from 'react';
import SearchItem from './SearchItem';
import SearchPagination from './SearchPagination';

const SearchList = ({ bookResult }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [currentContent, sestCurrentContent] = useState([]);

  useEffect(() => {
    if (bookResult.length !== 0) {
      setTotalPage(Math.ceil(bookResult.length / 15));
      sestCurrentContent(bookResult.slice((currentPage - 1) * 15, currentPage * 15));
      window.scrollTo(0, 0);
    } else {
      sestCurrentContent([]);
    }
  }, [bookResult, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [bookResult]);

  return (
    <div className="searchResultContainer">
      <small style={{ marginLeft: "30px" }}>{currentPage} page ;{bookResult.length} results</small>
      {currentContent.map((b) => {
        return (
          <SearchItem key={b.isbn} style={{ 'maxWidth': '500px', 'marginBottom': '30px' }} book={b} />
        );
      })}
      {bookResult.length === 0 ? <React.Fragment /> : <SearchPagination totalPage={totalPage} setPage={setCurrentPage} currentPage={currentPage} />}
    </div>
  );

};


export default SearchList;