import React from 'react';
import './NewsApiError.css';

function NewsApiError() {
  return (
    <div className="newsapi-error page__section">
      <h2 className="newsapi-error__title">Во время запроса произошла ошибка</h2>
      <p className="newsapi-error__info">Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
    </div>
  );
}

export default NewsApiError;
