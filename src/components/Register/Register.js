import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Button from '../Button/Button';

const Register = (props) => {
  const {
    onLoginClick,
    onClose,
    isRegisterOpen
  } = props;
  // const handleSubmit = (evt) => {
  //   evt.preventDefault();

  //   onRegister();
  // }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  return (
    <PopupWithForm
      title="Регистрация"
      linkName="Войти"
      submitName="Зарегистрироваться"
      // onSubmit={handleSubmit}
      isOpen={isRegisterOpen}
      onClose={onClose}
      changePopup={onLoginClick}
    >
      <label className="popup__label">
        Email
        <input
          type="email"
          name="email"
          required={true}
          className="popup__input"
          placeholder="Введите почту"
          // value={email}
          // onChange={handleChange}
        />
        <span className="popup__error">{}</span>
      </label>
      <label className="popup__label">
        Пароль
        <input
          type="password"
          name="password"
          required={true}
          className="popup__input"
          placeholder="Введите пароль"
          // value={password}
          // onChange={handleChange}
        />
        <span className="popup__error">{}</span>
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
          // value={userName}
          // onChange={handleChange}
        />
        <span className="popup__error">{}</span>
      </label>
      <span className="popup__error popup__error_api">{}</span>
      <Button
        type="submit"
        btnClass="popup__submit-btn"
        name="Зарегистрироваться"
        disabled={true}
      />
    </PopupWithForm>
  );
}

export default Register;
