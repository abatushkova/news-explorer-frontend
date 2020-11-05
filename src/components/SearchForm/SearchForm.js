import React, { useState } from 'react';
import Button from '../Button/Button';
import './SearchForm.css';

const SearchForm = () => {
  const [error, setError] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const trimmedInput = form.elements.search.trim();

    if (!trimmedInput) {
      setError('Нужно ввести ключевое слово');
    }
  };

  return (
    <section className="search">
      <div className="search__section">
        <h1 className="search__title">Что творится в мире?</h1>
        <p className="search__intro">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <form
          className="search__form"
          onSubmit={handleSubmit}
        >
          <span className="search__error">{error}</span>
          <input
            type="text"
            name="search"
            required={true}
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
