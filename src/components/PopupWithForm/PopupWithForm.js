import React, { useCallback, useEffect, useRef } from 'react';
import { ReactComponent as CloseIcon } from '../../images/close.svg';
import './PopupWithForm.css';

const PopupWithForm = (props) => {
  const {
    title,
    linkName,
    children,
    closePopup,
    // onSubmit,
    changePopup,
  } = props;

  const popupContainer = useRef(null);

  const handleOverlayClick = (evt) => {
    if (
      popupContainer.current
      && !popupContainer.current.contains(evt.target)
    ) {
      closePopup();
    }
  };

  const handleEsc = (evt) => {
    if (evt.key && evt.key === 'Escape') {
      closePopup();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleOverlayClick, false);
    document.addEventListener('keydown', handleEsc, false);

    return () => {
      document.removeEventListener('click', handleOverlayClick, false);
      document.removeEventListener('keydown', handleEsc, false);
    };
  }, []);

  return (
    <div className="popup popup_opened">
      <div className="popup__container" ref={popupContainer}>
        <button
          type="button"
          className="popup__close-btn"
          title="Закрыть"
          onClick={closePopup}
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
        {linkName && (
          <p className="popup__switch">
            или <button
              type="button"
              className="popup__link"
              onClick={changePopup}
            >
              {linkName}
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default PopupWithForm;
