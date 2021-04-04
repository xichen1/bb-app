import React, { useState } from 'react';

import { bookServices } from '../services/books';
import WarnInfo from './WarnInfo';

const NewBookForm = ({ setBooks, bookList }) => {

  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newAbout, setNewAbout] = useState('');
  const [newISBN, setNewISBN] = useState('');

  const [errorType, setErrorType] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  const checkEmpty = (book) => {
    if (book.title === '' || book.author === '' || book.about === '') {
      return false;
    }
    return true;
  }

  const addBook = (event) => {
    event.preventDefault();
    const newBook = {
      title: newTitle,
      author: newAuthor,
      about: newAbout,
      isbn: newISBN
    };

    if (!checkEmpty(newBook)) {
      setErrorType('new book creation');
      setErrorInfo('invalid input');
      setTimeout(() => {
        setErrorType(null);
        setErrorInfo(null);
      }, 3000);
    } else {
      bookServices.create(newBook)
        .then(retrievedBook => {
          setBooks(bookList.concat(retrievedBook));
          setNewTitle('');
          setNewAuthor('');
          setNewAbout('');
          setNewISBN('');
        })
        .catch(error => {
          setErrorType('new book creation');
          setErrorInfo("error");
          setTimeout(() => {
            setErrorType(null);
            setErrorInfo(null);
          }, 3000);
        });
    }
  }

  const handleTitleAdd = (event) => {
    event.preventDefault();
    setNewTitle(event.target.value);
  }

  const handleAuthorAdd = (event) => {
    event.preventDefault();
    setNewAuthor(event.target.value);
  }

  const handleAboutAdd = (event) => {
    event.preventDefault();
    setNewAbout(event.target.value);
  }

  const handleISBNAdd = (event) => {
    event.preventDefault();
    setNewISBN(event.target.value);
  }

  return (
    <div>
      <form onSubmit={addBook}>
        <label htmlFor="newTitle">Title: </label>
        <input value={newTitle} id="newTitle" onChange={handleTitleAdd} />

        <label htmlFor="newAuthor">Author: </label>
        <input value={newAuthor} id="newAuthor" onChange={handleAuthorAdd} />

        <label htmlFor="newAbout">About: </label>
        <input value={newAbout} id="newAbout" onChange={handleAboutAdd} />

        <label htmlFor="newISBN">ISBN: </label>
        <input value={newISBN} id="newISBN" onChange={handleISBNAdd} />

        <button type="submit">submit</button>
      </form>
      {errorType === null ? <div></div> : <WarnInfo errorType={errorType} errorInfo={errorInfo} />}
    </div>
  );
}

export default NewBookForm;