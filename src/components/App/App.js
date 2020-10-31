import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';

const App = () => {
  const [isLoginPopupOpen, setLoginOpen] = useState(false);
  const [isRegisterPopupOpen, setRegisterOpen] = useState(false);

  const [mode, setMode] = useState({
    BLACK: 'black',
    WHITE: 'white'
  });

  useEffect(() => {
    localStorage.setItem('mode', JSON.stringify(mode));

    return () => {
      setMode(JSON.parse(localStorage.getItem('mode')))
    }
  }, [mode]);

  const handleLoginClick = () => {
    setLoginOpen(true);
    setRegisterOpen(false);
  };
  const handleRegisterClick = () => {
    setRegisterOpen(true);
    setLoginOpen(false);
  };

  const closePopups = () => {
    setLoginOpen(false);
    setRegisterOpen(false);
  };

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main
            onLoginClick={handleLoginClick}
            mode={mode}
          />
        </Route>
        <Route path="/saved-news">
          <SavedNews
            mode={mode}
          />
        </Route>
      </Switch>
      <Footer />
      <Login
        isLoginOpen={isLoginPopupOpen}
        onClose={closePopups}
        onRegisterClick={handleRegisterClick}
      />
      <Register
        isRegisterOpen={isRegisterPopupOpen}
        onClose={closePopups}
        onLoginClick={handleLoginClick}
      />
    </div>
  );
};

export default App;
