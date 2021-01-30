import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import { loginServices } from '../services/login';
import { signupService } from '../services/signup';
import SuccessInfo from './SuccessInfo';
import WarnInfo from './WarnInfo';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [errorType, setErrorType] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  const [successInfo, setSuccessInfo] = useState(null);

  const [signup, setSignup] = useState(false);

  const history = useHistory();
  const login = async (event) => {
    event.preventDefault();
    try {
      const user = await loginServices.login({
        username, password
      });
      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      );
      setUsername('');
      setPassword('');
      history.push('/');
    } catch (error) {
      setErrorType('varify failed');
      setErrorInfo('wrong username/password');
      setTimeout(() => {
        setErrorType(null);
        setErrorInfo(null);
      }, 5000)
    }
  }

  const signupSubmit = async (event) => {
    event.preventDefault();
    try {
      await signupService.signup({ username, name, password });
      setUsername('');
      setPassword('');
      setName('');
      setSuccessInfo('SignUp success!');
      setTimeout(() => {
        setSuccessInfo(null);
        history.push('/login');
      }, 3000);
    } catch (error) {
      setErrorType('singup failed');
      setErrorInfo('invalid username/password');
      setTimeout(() => {
        setErrorType(null);
        setErrorInfo(null);
      }, 5000)
    }
  }

  return (
    <div>
      <div className='loginContainer'>
        {
          signup === false ?
            <form className='loginForm' onSubmit={login}>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <h2 className='appName'>Book Review Board</h2>
              </Link>
              {errorType === null ? <div></div> : <WarnInfo errorType={errorType} errorInfo={errorInfo} />}
              {successInfo === null ? <div></div> : <SuccessInfo successInfo={successInfo} />}
              <h3>Sign In</h3>
              <div className='inputContainer'>
                <input
                  type='text'
                  value={username}
                  onChange={({ target }) =>
                    setUsername(target.value)}
                  placeholder='username'
                />
              </div>
              <div className='inputContainer'>
                <input
                  type='password'
                  value={password}
                  onChange={({ target }) =>
                    setPassword(target.value)}
                  placeholder='password'
                />
              </div>
              <button className='submitBtn' type='submit'>Sign In</button>
              <p className='switchSign' onClick={() => { setSignup(true) }}>create account</p>
            </form>
            :
            <form className='signupForm' onSubmit={signupSubmit}>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <h2 className='appName'>Book Review Board</h2>
              </Link>
              {errorType === null ? <div></div> : <WarnInfo errorType={errorType} errorInfo={errorInfo} />}
              {successInfo === null ? <div></div> : <SuccessInfo successInfo={successInfo} />}
              <h3>Sign Up</h3>
              <div className='inputContainer'>
                <input
                  type='text'
                  value={username}
                  onChange={({ target }) =>
                    setUsername(target.value)}
                  placeholder='username'
                />
              </div>
              <div className='inputContainer'>
                <input
                  type='text'
                  value={name}
                  onChange={({ target }) =>
                    setName(target.value)}
                  placeholder='name'
                />
              </div>
              <div className='inputContainer'>
                <input
                  type='password'
                  value={password}
                  onChange={({ target }) =>
                    setPassword(target.value)}
                  placeholder='password'
                />
              </div>
              <button className='submitBtn' type='submit'>Sign In</button>
              <p className='switchSign' onClick={() => { setSignup(false) }}>Have an account?</p>
            </form>
        }
      </div>
    </div>

    // <div>
    //   <div>{user.username}</div>
    //   <div>hello, {user.name}</div>
    //   <button onClick={() => { setUser(null) }}>Log Out</button>
    // </div>

  );

}

export default Login;