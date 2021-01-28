import React from 'react';
import BookList from './BookList';

import '../styles/mainpage.css';
import Login from './Login';

const MainPage = () => {

  return (
    <div className='projectContainer'>
      <div className='mainContentContainer'>
        <div className='titleBookContainer'>
          <h1 className='webTitle'>Book Review Board</h1>
          <Login />
          <BookList />
        </div>
      </div>
    </div>
  );

};

export default MainPage;