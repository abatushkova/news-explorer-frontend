import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import SavedNews from '../SavedNews/SavedNews';
import Tooltip from '../Tooltip/Tooltip';
import Header from '../Header/Header';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MainApi from '../../utils/MainApi';
import NavBar from '../NavBar/NavBar';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);
  const [isTooltipPopupOpen, setTooltipPopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [apiError, setApiError] = useState('');
  const [savedArticleList, setSavedArticleList] = useState([]);
  const history = useHistory();

  const [mode, setMode] = useState({
    BLACK: 'black',
    WHITE: 'white'
  });

  useEffect(() => {
    if (!localStorage.getItem('token')) return;

    Promise.all([
      localStorage.getItem('token'),
      MainApi.getUser(localStorage.getItem('token')),
    ])
    .then(([token, user]) => {
      if (token) {
        MainApi.checkToken(token)
          .then((res) => {
            if (res) {
              setCurrentUser(user);
              setLoggedIn(true);
            }
          });
      }
    })
    .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    localStorage.setItem('mode', JSON.stringify(mode));

    return () => {
      setMode(JSON.parse(localStorage.getItem('mode')))
    }
  }, [mode]);

  useEffect(() => {
    if (history.action === 'REPLACE') {
      setLoginPopupOpen(true);
    }
  }, [history]);

  const onLogin = ({ email, password }) => {
    return MainApi.login({ email, password })
      .then((res) => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);

          MainApi.checkToken(res.token)
            .then((res) => {
              if (res) {
                setCurrentUser(res);
                setLoggedIn(true);
                setLoginPopupOpen(false);
              }
            });
        }

        return Promise.reject(res);
      })
      .catch((err) => setApiError(err.message));
  };

  const onRegister = ({ email, password, name }) => {
    return MainApi.register({ email, password, name })
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
  };

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

  const handleSaveArticle = (article) => {
    return MainApi.createArticle(article, localStorage.getItem('token'))
      .then((newArticle) => {
        const newArticles = savedArticleList.map((a) => (
          a._id === article._id ? newArticle : a
        ));

        setSavedArticleList(newArticles);
        return newArticle;
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteArticle = (articleID) => {
    return MainApi.deleteArticle(articleID, localStorage.getItem('token'))
      .then((newArticle) => {
        const newArticles = savedArticleList.filter((a) => (
          a._id === articleID ? null : newArticle
        ));

        setSavedArticleList(newArticles);
        return newArticle;
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <CurrentUserContext.Provider value={currentUser}>
            <Header mode={mode.WHITE}>
              <NavBar
                mode={mode.WHITE}
                openLogin={handleLoginClick}
                loggedIn={loggedIn}
                signOut={onSignOut}
              />
            </Header>
            <Main
              loggedIn={loggedIn}
              onSaveClick={handleSaveArticle}
              onDeleteClick={handleDeleteArticle}
              onSaveClickNotLoggedIn={handleLoginClick}
            />
          </CurrentUserContext.Provider>
        </Route>
        <ProtectedRoute
          path="/saved-news"
        >
          <CurrentUserContext.Provider value={currentUser}>
            {currentUser && (
              <>
                <Header mode={mode.BLACK}>
                  <NavBar
                    mode={mode.BLACK}
                    openLogin={handleLoginClick}
                    loggedIn={loggedIn}
                    signOut={onSignOut}
                  />
                </Header>
                <SavedNews
                  onDeleteClick={handleDeleteArticle}
                  savedArticleList={savedArticleList}
                />
              </>
            )}
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
