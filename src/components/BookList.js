import React, { useState, useEffect } from 'react';

import NewBookForm from './NewBookForm';
import BookBriefItem from './BookBriefItem';
import { bookServices } from '../services/books'


const BookList = () => {
  const [books, setBooks] = useState(null);

  useEffect(() =>
    bookServices.getAll().then(retrievedAllBooks => {
      setBooks(retrievedAllBooks);
    }), []);

  console.log(books);
  return (
    books === null ?
      <div>

      </div> :
      <div>
        {books.map(b => <div key={b.id}><BookBriefItem title={b.title} author={b.author} about={b.about} id={b.id} />
        </div>)}
        <NewBookForm setBooks={setBooks} bookList={books} />
      </div>
  );
}

export default BookList
