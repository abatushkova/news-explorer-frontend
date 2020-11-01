import React from 'react';
import PopupContainer from '../PopupContainer/PopupContainer';
import { ReactComponent as CloseIcon } from '../../images/close.svg';
import './PopupWithForm.css';

const PopupWithForm = (props) => {
  const {
    title,
    linkName,
    children,
    onClose,
    // onSubmit,
    changePopup,
  } = props;

  return (
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
        >
          <CloseIcon />
        </button>
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
  );
}

export default PopupWithForm;
