import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

import '../styles/newbookpage.css';
import NotFound404 from '../pages/NotFound404';
import { newBookSearch } from '../services/newBookSearch';
import SearchList from '../components/SearchList';
import Navigation from '../components/Navigation';

const parseBook = (book) => {
  if (book.volumeInfo === undefined || book.volumeInfo < 2000) {
    book.volumeInfo = null;
    return book;
  }

  let volumeInfo = book.volumeInfo;
  if (volumeInfo.title === undefined) {
    volumeInfo.title = 'unavailable';
  }
  if (volumeInfo.imageLinks === undefined || volumeInfo.imageLinks.thumbnail === undefined) {
    volumeInfo.imgLink = null;
  } else {
    volumeInfo.imgLink = volumeInfo.imageLinks.thumbnail;
  }
  if (volumeInfo.authors === undefined) {
    volumeInfo.authors = 'unavailable';
  } else {
    volumeInfo.authors = volumeInfo.authors.join();
  }
  if (volumeInfo.industryIdentifiers === undefined) {
    volumeInfo.isbn = 'unavailable';
  } else {
    const isbnList = volumeInfo.industryIdentifiers.find(i => (i.type === 'ISBN_13'));
    if (isbnList) {
      volumeInfo.isbn = isbnList['identifier'];
    } else {
      volumeInfo.isbn = 'unavailable';
    }
  }

  book.volumeInfo = volumeInfo;
  return book;
};

const NewBookPage = () => {

  const [user, setUser] = useState(null);
  const [query, setQuery] = useState('');

  const [bookResult, setBookResult] = useState([]);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  const handleQueryChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  const searchBookSubmit = async (event) => {
    if (query === '') {
      setBookResult([]);
      return;
    }
    try {
      event.preventDefault();
      const res = await newBookSearch.search(query);
      const books = res.items;
      setBookResult(books.map(b => {
        return parseBook(b).volumeInfo;
      }));
      console.log(bookResult);
    } catch (e) {
      console.log(e)
    };
  }


  return (
    user ?
      <div className='rootContainer'>
        <div className='searchToolContainer'>
          <div className='searchAndResult'>
            <Navigation />
            <div className='searchTool'>
              <h2>Add New Book</h2>
              <form onSubmit={searchBookSubmit}>
                <input className='searchField' onChange={handleQueryChange} placeholder="Title, Author, ISBN..." />
                <Button variant="contained" type='submit'>Search</Button>
              </form>
            </div>
            <SearchList bookResult={bookResult} />
          </div>
        </div>
      </div> :
      <NotFound404 />
  );

};


export default NewBookPage;