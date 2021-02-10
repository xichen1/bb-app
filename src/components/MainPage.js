import React from 'react';
import BookList from './BookList';
import Navigation from './Navigation';

import '../styles/mainpage.css';

const MainPage = () => {



  return (
    <div className='projectContainer'>
      <div className='mainContentContainer'>
        <div className='titleBookContainer'>
          <Navigation />
          <BookList />
        </div>
      </div>
    </div>
  );

};

export default MainPage;