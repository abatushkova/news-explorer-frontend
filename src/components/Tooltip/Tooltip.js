import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const Tooltip = (props) => {
  const {
    onClose,
    onLoginClick
  } = props;

  return (
    <PopupWithForm
      title="Пользователь успешно зарегистрирован!"
      closePopup={onClose}
    >
      <button
        type="button" 
        className="popup__link popup__link_size_18"
        onClick={onLoginClick}
      >
        Войти
      </button>
    </PopupWithForm>
  );
}

export default Tooltip;
