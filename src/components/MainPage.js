import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import UserStatus from './UserStatus';

import '../styles/mainpage.css';

const MainPage = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  const logout = () => {
    setUser(null);
    window.localStorage.removeItem('loggedNoteappUser');
  };

  return (
    <div className='projectContainer'>
      <div className='mainContentContainer'>
        <div className='titleBookContainer'>
          <div className='titleStatusContainer'>
            <h1 className='webTitle'>Book Review Board</h1>
            <UserStatus className='status' user={user} logout={logout} />
          </div>
          <BookList />
        </div>
      </div>
    </div>
  );

};

export default MainPage;