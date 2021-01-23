import React, { useState } from 'react';


const NewBookForm = ({ setBooks, bookList }) => {

  const [newTitle, setNewTitle] = useState();
  const [newAuthor, setNewAuthor] = useState();
  const [newAbout, setNewAbout] = useState();

  const addBook = (event) => {
    event.preventDefault();
    setBooks(bookList.concat({
      id: bookList[-1] + 1,
      title: newTitle,
      author: newAuthor,
      about: newAbout,
      available: 'on shelf'
    }));
    setNewTitle('');
    setNewAuthor('');
    setNewAbout('');
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

  return (
    <form onSubmit={addBook}>
      <label for="newTitle">Title: </label>
      <input value={newTitle} id="newTitle" onChange={handleTitleAdd} />

      <label for="newAuthor">Author: </label>
      <input value={newAuthor} id="newAuthor" onChange={handleAuthorAdd} />

      <label for="newAbout">About: </label>
      <input value={newAbout} id="newAbout" onChange={handleAboutAdd} />
      <button type="submit">submit</button>
    </form>
  );
}

export default NewBookForm;