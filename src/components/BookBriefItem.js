import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/mainpage.css';

const BookBriefItem = ({ title, author, isbn, id }) => {
  return (
    <div className='bookItemContainer'>
      <h3 className='bookTitleContainer'>
        <Link to={`/bookdetails/${id}`}>
          {title}
        </Link>
      </h3>
      <small className='bookAuthorContainer'>
        author: {author}
      </small>
      <p className='bookISBNContainer'>
        isbn: {isbn}
      </p>
    </div>
  );
};

export default BookBriefItem;