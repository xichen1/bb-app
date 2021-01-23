import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NewBookForm from './NewBookForm';



const BookList = () => {
  const [books, setBooks] = useState([]);
  const [bookTypeSelect, setBookTypeSelect] = useState();



  useEffect(() =>
    axios.get('http://localhost:3001/bookdata').then(response => {
      setBooks(response.data);
    }), [])

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
      <h1>Books</h1>
      <select value={bookTypeSelect} onChange={changeBookTypeSelect}>
        <option></option>
        <option value="allbook">all book</option>
        <option value="availablebook">available book</option>
      </select>
      <ul>
        {books.map(b => <li key={b.id}>{b.title}</li>)}
      </ul>
      <NewBookForm setBooks={setBooks} bookList={books} />
    </div>

  );
}

export default BookList
