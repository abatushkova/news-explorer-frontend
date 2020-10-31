import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';

const App = () => {

  useEffect(() => {
    localStorage.setItem('mode', JSON.stringify({
      BLACK: 'black',
      WHITE: 'white',
    }));
  }, []);

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/saved-news">
          <SavedNews />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
