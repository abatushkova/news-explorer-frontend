import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';

const App = () => {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
        </Route>
        <Route path="/saved-news">
          <Header />
          <SavedNews />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
