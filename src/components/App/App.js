import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import SavedNews from '../SavedNews/SavedNews';
import Tooltip from '../Tooltip/Tooltip';
import Header from '../Header/Header';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as auth from '../../utils/auth';
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);
  const [isTooltipPopupOpen, setTooltipPopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [apiError, setApiError] = useState('');
  const history = useHistory();
  const location = useLocation();

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

  useEffect(() => {
    if (location.pathname === '/saved-news') {
      setLoginPopupOpen(true);
    }

    if (!localStorage.getItem('token')) {
      return;
    }

    Promise.all([
      localStorage.getItem('token'),
      MainApi.getUser()
    ])
    .then(([token, user]) => {
      if (token) {
        auth.checkToken(token)
          .then((res) => {
            if (res) {
              setLoggedIn(true);
            }
          });
      }

      setCurrentUser(user);
    })
    .catch((err) => console.error(err));
  }, []);

  const onLogin = ({ email, password }) => {
    return auth.login({ email, password })
      .then((res) => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);
          
          auth.checkToken(res.token)
          .then((res) => {
            if (res) {
              setCurrentUser(res);
              setLoggedIn(true);
              setLoginPopupOpen(false);
          }});
        }

        return Promise.reject(res);
      })
      .catch((err) => setApiError(err.message));
  };

  const onRegister = ({ email, password, name }) => {
    return auth.register({ email, password, name })
      .then((res) => {
        if (res && res._id) {
          setCurrentUser(res);
          setRegisterPopupOpen(false);
          setTooltipPopupOpen(true);
        }

        return Promise.reject(res);
      })
      .catch((err) => setApiError(err.message));
  };

  const onSignOut = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    history.push('/');
  }

  const handleLoginClick = () => {
    setLoginPopupOpen(true);
    setRegisterPopupOpen(false);
    setTooltipPopupOpen(false);
  };

  const handleRegisterClick = () => {
    setRegisterPopupOpen(true);
    setLoginPopupOpen(false);
  };

  const closePopups = () => {
    setLoginPopupOpen(false);
    setRegisterPopupOpen(false);
    setTooltipPopupOpen(false);
    setApiError('');
  };

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <CurrentUserContext.Provider value={currentUser}>
            <Header
              mode={mode.WHITE}
              onLoginClick={handleLoginClick}
              loggedIn={loggedIn}
              onSignOut={onSignOut}
            />
            <Main />
          </CurrentUserContext.Provider>
        </Route>
        <ProtectedRoute
          path="/saved-news"
        >
          <CurrentUserContext.Provider value={currentUser}>
            <Header
              mode={mode.BLACK}
              loggedIn={loggedIn}
              onSignOut={onSignOut}
            />
            <SavedNews />
          </CurrentUserContext.Provider>
        </ProtectedRoute>
      </Switch>
      <Footer />
      {isLoginPopupOpen && (
        <Login
          onLogin={onLogin}
          onClose={closePopups}
          onRegisterClick={handleRegisterClick}
          apiError={apiError}
        />
      )}
      {isRegisterPopupOpen && (
        <Register
          onRegister={onRegister}
          onClose={closePopups}
          onLoginClick={handleLoginClick}
          apiError={apiError}
        />
      )}
      {isTooltipPopupOpen && (
        <Tooltip
          onClose={closePopups}
          onLoginClick={handleLoginClick}
        />
      )}
    </div>
  );
};

export default App;
