import React from 'react';
import PopupContainer from '../PopupContainer/PopupContainer';
import './PopupWithForm.css';

const PopupWithForm = (props) => {
  const {
    title,
    linkName,
    children,
    isOpen,
    onClose,
    // onSubmit,
    changePopup
  } = props;

  return (isOpen ? (
    <div className="popup popup_opened">
      <PopupContainer
        className="popup__container"
        closeHandler={onClose}
      >
        <button
          type="button"
          className="popup__close-btn"
          title="Закрыть"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          // onSubmit={onSubmit}
        >
          {children}
        </form>
        <p className="popup__switch">
          или <button
            type="button"
            className="popup__link"
            onClick={changePopup}
          >
            {linkName}
          </button>
        </p>
      </PopupContainer>
    </div>
  ) : (
    <div className="popup"></div>
  ));
}

export default PopupWithForm;
