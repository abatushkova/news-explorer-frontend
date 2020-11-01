import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Button from '../Button/Button';
import useInputChange from '../../hooks/useInputChange';

const Login = (props) => {
  const {
    onClose,
    onRegisterClick
  } = props;

  const {
    errors,
    handleInputChange,
    isFormValid,
    resetForm
  } = useInputChange();

  const handleClose = () => {
    resetForm();
    onClose();
  };

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();

  //   onLogin();
  // }

  return (
    <PopupWithForm
      title="Вход"
      linkName="Зарегистрироваться"
      submitName="Войти"
      closePopup={handleClose}
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
          onChange={handleInputChange}
        />
        <span className="popup__error">{errors.email}</span>
      </label>
      <label className="popup__label">
        Пароль
        <input
          type="password"
          name="password"
          required={true}
          className="popup__input"
          placeholder="Введите пароль"
          onChange={handleInputChange}
        />
        <span className="popup__error">{errors.password}</span>
      </label>
      <span className="popup__error popup__error_type_api">{}</span>
      <Button
        type="submit"
        btnClass="popup__submit-btn"
        disabled={!isFormValid}
        name="Войти"
      />
    </PopupWithForm>
  );
}

export default Login;
