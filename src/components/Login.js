import React, { useState, useEffect } from 'react';
import { loginServices } from '../services/login';
import WarnInfo from './WarnInfo';
import UserState from './UserState';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [user, setUser] = useState(null);

  const [errorType, setErrorType] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  const login = async (event) => {
    event.preventDefault();
    try {
      const user = await loginServices.login({
        username, password
      });
      setUser(user);
      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      );
      setUsername('');
      setPassword('');
    } catch (error) {
      setErrorType('varify failed');
      setErrorInfo('wrong username/password');
      setTimeout(() => {
        setErrorType(null);
        setErrorInfo(null);
      }, 5000)
    }
  }

  return (
    user === null ?
      <div>
        <form onSubmit={login}>
          <div>
            <label>username: </label>
            <input
              type='text'
              value={username}
              onChange={({ target }) =>
                setUsername(target.value)}
            />
          </div>
          <div>
            <label>password: </label>
            <input
              type='text'
              value={password}
              onChange={({ target }) =>
                setPassword(target.value)}
            />
          </div>
          <button type='submit'>login</button>
        </form>
        {errorType === null ? <div></div> : <WarnInfo errorType={errorType} errorInfo={errorInfo} />}
      </div> :
      <UserState username={user.username} name={user.name} />

  );

}

export default Login;