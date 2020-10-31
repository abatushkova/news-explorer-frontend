import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const Tooltip = () => {
  return (
    <PopupWithForm
      title="Пользователь успешно зарегистрирован!"
    >
      <button
        type="button" 
        className="popup__link popup__link_size_18"
        // onClick={openLogin}
      >
        Войти
      </button>
    </PopupWithForm>
  );
}

export default Tooltip;
