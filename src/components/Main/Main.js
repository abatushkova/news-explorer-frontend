import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Author from '../Author/Author';
import NewsCardList from '../NewsCardList/NewsCardList';
import Header from '../Header/Header';
import Button from '../Button/Button';
import './Main.css';

const Main = () => {
  const mode = JSON.parse(localStorage.getItem('mode'));

  return (
    <>
      <Header mode={mode.WHITE} />
      <main>
        <SearchForm />
        <NewsCardList />
        <Author />
      </main>

      <div className="popup popup_type_signin">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-btn"
            title="Закрыть"
          ></button>
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
          ></button>
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
          ></button>
          <h2 className="popup__title">Пользователь успешно зарегистрирован!</h2>
          <button
            type="button" 
            className="popup__link popup__login"
          >
            Войти
          </button>
        </div>
      </div>

    </>
  );
};

export default Main;
