import React from 'react';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found page__section">
      <span className="not-found__icon"></span>
      <h2 className="not-found__title">Ничего не найдено</h2>
      <p className="not-found__info">К сожалению по вашему запросу ничего не найдено.</p>
    </div>
  );
}

export default NotFound;
