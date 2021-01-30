import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import BookDetailPage from './pages/BookDetailPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact >
        <MainPage />
      </Route>
      <Route path="/login" exact >
        <LoginPage />
      </Route>
      <Route path="/bookdetails/:id">
        <BookDetailPage />
      </Route>
    </Switch>
  );

}

export default App;
