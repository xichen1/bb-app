import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import UserStatus from './UserStatus';

const Navigation = () => {

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

  const linkStyle = { color: 'black', textDecoration: 'none' };

  return (
    <div className='titleStatusContainer'>
      <Link to='/' style={linkStyle}>
        <h1 className='webTitle'>Book Review Board</h1>
      </Link>
      <UserStatus className='status' user={user} logout={logout} />
    </div>
  );
}

export default Navigation;