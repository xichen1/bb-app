import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

import '../styles/newbookpage.css';
import NotFound404 from '../pages/NotFound404';
import { newBookSearch } from '../services/newBookSearch';
import SearchList from '../components/SearchList';

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
    try {
      event.preventDefault();
      const res = await newBookSearch.search(query);
      const books = res.items;
      setBookResult(books.map(b => {
        return (b.volumeInfo);
      }));
    } catch (e) {
    };
  }


  return (
    user ?
      <div className='rootContainer'>
        <div className='searchToolContainer'>
          <div className='searchAndResult'>
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