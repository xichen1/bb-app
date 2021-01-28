import React from 'react';

const UserState = ({ username, name }) => {
  const logout = () => {
    window.localStorage.clear()
  };

  return (
    <div>
      <div>{username}</div>
      <div>hello, {name}</div>
      <button onClick={logout}>Log Out</button>
    </div>

  );
}

export default UserState;