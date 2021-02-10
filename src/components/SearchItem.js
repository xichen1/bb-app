import React from 'react';

const SearchItem = ({ book }) => {

  return (
    <div className='searchItemContainer'>
      <div className='searchItemTextPart'>
        <h3 style={{ marginTop: '2rem' }}>{book.title}</h3>
        <small>author: {book.authors}</small>
        <p>ISBN-13: {book.isbn}</p>
      </div>
      <div className='searchItemImgPart'>
        <img src={book.imgLink} alt='book' ></img>
      </div>
    </div>
  );

};

export default SearchItem;