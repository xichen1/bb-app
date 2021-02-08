import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import BookDetailPage from './pages/BookDetailPage';
import LoginPage from './pages/LoginPage';
import NewBookPage from './pages/NewBookPage';
import NotFound404 from './pages/NotFound404';

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
      <Route path="/new-book">
        <NewBookPage />
      </Route>
      <Route component={NotFound404} />
    </Switch>
  );

}

export default App;
