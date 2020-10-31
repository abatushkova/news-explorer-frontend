import React from 'react';
import useInputChange from '../../hooks/useInputChange';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Button from '../Button/Button';

const Register = (props) => {
  const {
    onLoginClick,
    onClose,
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

  //   onRegister();
  // }

  return (
    <PopupWithForm
      title="Регистрация"
      linkName="Войти"
      submitName="Зарегистрироваться"
      // onSubmit={handleSubmit}
      onClose={handleClose}
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
      <label className="popup__label">
        Имя
        <input
          type="text"
          name="userName"
          required={true}
          minLength={2}
          maxLength={30}
          className="popup__input"
          placeholder="Введите своё имя"
          onChange={handleInputChange}
        />
        <span className="popup__error">{errors.userName}</span>
      </label>
      <span className="popup__error popup__error_type_api">{}</span>
      <Button
        type="submit"
        btnClass="popup__submit-btn"
        disabled={!isFormValid}
        name="Зарегистрироваться"
      />
    </PopupWithForm>
  );
}

export default Register;
