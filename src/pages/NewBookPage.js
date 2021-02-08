import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

import '../styles/newbookpage.css';
import NotFound404 from '../pages/NotFound404';
import { newBookSearch } from '../services/newBookSearch';

const NewBookPage = () => {

  const option = ['title', 'author', 'isbn'];

  const [user, setUser] = useState(null);
  const [typeValue, setTypeValue] = useState(option[0]);
  const [inputTypeValue, setInputTypeValue] = useState('');
  const [query, setQuery] = useState('');

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
    event.preventDefault();
    try {
      const res = await newBookSearch.search(query);
      const books = res.items;
      console.log(books);
    } catch (e) {
    };
  }


  return (
    user ?
      <div className='rootContainer'>
        <div className='searchToolContainer'>
          <div className='searchTool'>
            <form onSubmit={searchBookSubmit} className='searchTool'>
              <Autocomplete
                id="new-book-search-box"
                className="drop-down-box"
                options={option}
                getOptionDisabled={(option) => option}
                style={{ width: 200 }}
                renderInput={(params) => (
                  <TextField {...params} label="Type" variant="outlined" />
                )}
                value={typeValue}
                onChange={(event, newValue) => {
                  setTypeValue(newValue);
                }}
                inputValue={inputTypeValue}
                onInputChange={(event, newInputValue) => {
                  setInputTypeValue(newInputValue);
                }}
              />
              <input className='searchField' onChange={handleQueryChange} />
              <Button variant="contained" type='submit'>Search</Button>
            </form>
          </div>
        </div>
      </div> :
      <NotFound404 />
  );

};


export default NewBookPage;