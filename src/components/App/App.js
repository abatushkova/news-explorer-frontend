import React from 'react';
import { Link } from 'react-router-dom';
// import {
//   Route,
//   Switch,
// } from 'react-router-dom';
// import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import Main from '../Main/Main';
// import SavedNews from '../SavedNews/SavedNews';
import SearchForm from '../SearchForm/SearchForm';
import Author from '../Author/Author';
import Button from '../Button/Button';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import { ReactComponent as CloseBtn } from '../../images/close.svg';
import './App.css';

const App = () => {
  return (
    <div className="page">
      {/* <Switch>
        <Route exact path="/">
          <Header />
          <Main />
        </Route>
        <Route path="/saved-news">
          <Header />
          <SavedNews />
        </Route>
      </Switch>
      <Footer /> */}

      <header className="header">
        <div className="header__section page__section">
          <Link to="/" className="header__logo">NewsExplorer</Link>
          <input
            type="checkbox"
            id="burger-btn"
            className="header__burger-checkbox"
          />
          <label className="header__burger-icon" htmlFor="burger-btn">
            <span className="header__burger"></span>
          </label>

        </div>
      </header>
      <main>
        {/* <SavedNewsHeader /> */}
        <SearchForm />
        <NewsCardList />
        <Author />
      </main>
      <Footer />

      <div className="popup popup_type_signin">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-btn"
            title="Закрыть"
          >
            <CloseBtn />
          </button>
          <h2 className="popup__title">Вход</h2>
          <form className="popup__form">
            <label className="popup__label">
              Email
              <input
                type="email"
                name="email"
                required={true}
                className="popup__input"
                placeholder="Введите почту"
              />
              <span className="popup__error">Неправильный формат email</span>
            </label>
            <label className="popup__label">
              Пароль
              <input
                type="password"
                name="password"
                required={true}
                className="popup__input"
                placeholder="Введите пароль"
              />
              <span className="popup__error">Поле обязательно для заполнения</span>
            </label>
            <span className="popup__error popup__error_type_api">Такой пользователь уже есть</span>
            <Button
              type="submit"
              btnClass="popup__submit-btn"
              disabled={true}
              name="Войти"
            />
          </form>
          <p className="popup__switch">
            или <button type="button" className="popup__link">Зарегистрироваться</button>
            {/* <span className="popup__link">Зарегистрироваться</span> */}
          </p>
        </div>
      </div>

      <div className="popup popup_type_signup">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-btn"
            title="Закрыть"
          >
            <CloseBtn />
          </button>
          <h2 className="popup__title">Регистрация</h2>
          <form className="popup__form">
            <label className="popup__label">
              Email
              <input
                type="email"
                name="email"
                required={true}
                className="popup__input"
                placeholder="Введите почту"
              />
              <span className="popup__error">Неправильный формат email</span>
            </label>
            <label className="popup__label">
              Пароль
              <input
                type="password"
                name="password"
                required={true}
                className="popup__input"
                placeholder="Введите пароль"
              />
              <span className="popup__error">Поле обязательно для заполнения</span>
            </label>
            <label className="popup__label">
              Имя
              <input
                type="text"
                required={true}
                minLength={2}
                maxLength={30}
                className="popup__input"
                placeholder="Введите своё имя"
              />
              <span className="popup__error">Поле обязательно для заполнения</span>
            </label>
            <span className="popup__error popup__error_api">Такой пользователь уже есть</span>
            <Button
              type="submit"
              btnClass="popup__submit-btn"
              name="Зарегистрироваться"
            />
          </form>
          <p className="popup__switch">
            или <button type="button" className="popup__link">Войти</button>
          </p>
        </div>
      </div>

      <div className="popup popup_type_info">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-btn"
            title="Закрыть"
          >
            <CloseBtn />
          </button>
          <h2 className="popup__title">Пользователь успешно зарегистрирован!</h2>
          <button
            type="button" 
            className="popup__link popup__login"
          >
            Войти
          </button>
        </div>
      </div>

    </div>
  );
};

export default App;
