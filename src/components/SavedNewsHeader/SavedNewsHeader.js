import React from 'react';
import './SavedNewsHeader.css';

const SavedNewsHeader = () => {
  return (
    <div className="news-header page__section">
      <h1 className="news-header__title">Сохранённые статьи</h1>
      <p className="news-header__intro">
        Грета, у вас 5
        <br />
        сохранённых статей
      </p>
      <p className="news-header__keywords">
        По ключевым словам:
        <span className="news-header__strong"> Природа,</span>
        <span className="news-header__strong"> Тайга </span>
        и
        <span className="news-header__strong"> 2-м другим</span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
