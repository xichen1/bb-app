import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import BookDetailPage from './pages/BookDetailPage';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/bookdetails/:id">
        <BookDetailPage />
      </Route>
    </Switch>
  );

}

export default App;
