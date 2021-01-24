import React, { useState, useEffect } from 'react';

import NewBookForm from './NewBookForm';
import Book from './Book';
import { bookServices } from '../services/books'

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [bookTypeSelect, setBookTypeSelect] = useState();



  useEffect(() =>
    bookServices.getAll().then(retrievedAllBooks => {
      setBooks(retrievedAllBooks);
    }), []);


  const changeBookTypeSelect = (event) => {
    const type = event.target.value
    setBookTypeSelect(type);
    if (type === "allbook") {
      setBooks(books);
    } else if (type === "availablebook") {
      setBooks(books.filter(b => (b.available === 'on shelf')));
    }
  }

  return (
    <div>
      <select value={bookTypeSelect} onChange={changeBookTypeSelect}>
        <option value="allbook">all book</option>
        <option value="availablebook">available book</option>
      </select>
      <ul>
        {books.map(b => <div><li key={b.id}>{b.title}</li><Book book={b} /></div>)}
      </ul>
      <NewBookForm setBooks={setBooks} bookList={books} />
    </div>

  );
}

export default BookList
