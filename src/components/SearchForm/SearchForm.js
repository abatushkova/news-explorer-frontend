import React from 'react';
import Button from '../Button/Button';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className="search">
      <div className="search__section">
        <h1 className="search__title">Что творится в мире?</h1>
        <p className="search__intro">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <form className="search__form">
          <input
            type="text"
            placeholder="Введите тему новости"
            className="search__input"
          />
          <Button
            type="submit"
            btnClass="search__submit-btn"
            name="Искать"
          />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
