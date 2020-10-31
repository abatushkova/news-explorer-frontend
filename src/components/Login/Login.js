import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Button from '../Button/Button';

const Login = (props) => {
  const {
    isLoginOpen,
    onClose,
    onRegisterClick
  } = props;

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();

  //   onLogin();
  // }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <PopupWithForm
      title="Вход"
      linkName="Зарегистрироваться"
      submitName="Войти"
      isOpen={isLoginOpen}
      onClose={onClose}
      // onSubmit={handleSubmit}
      changePopup={onRegisterClick}
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
          // value={password}
          // onChange={handleChange}
        />
        <span className="popup__error"></span>
      </label>
      <span className="popup__error popup__error_type_api"></span>
      <Button
        type="submit"
        btnClass="popup__submit-btn"
        disabled={true}
        name="Войти"
      />
    </PopupWithForm>
  );
}

export default Login;
