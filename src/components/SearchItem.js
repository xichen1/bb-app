import React from 'react';

const SearchItem = ({ book }) => {
  let isbn = 'not found'
  if (book.industryIdentifiers !== undefined) {
    const isbnList = book.industryIdentifiers.find(i => (i.type === 'ISBN_13'));
    if (isbnList) {
      isbn = isbnList['identifier'];
    }
  }

  return (
    <div className='searchItemContainer'>
      <div className='searchItemTextPart'>
        <h3 style={{ marginTop: '2rem' }}>{book.title}</h3>
        <small>author: {book.authors ? book.authors[0] : "not found"}</small>
        <p>ISBN-13: {isbn}</p>
      </div>
      <div className='searchItemImgPart'>
        <img src={book.imageLinks.thumbnail} alt='book' ></img>
      </div>
    </div>
  );

};

export default SearchItem;