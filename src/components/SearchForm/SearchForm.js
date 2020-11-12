import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './SearchForm.css';

const SearchForm = (props) => {
  const { searchNews, resetSearch } = props;
  const [error, setError] = useState('');

  const handleInputChange = () => {
    setError('');
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const searchValue = form.elements.search.value;

    if (!searchValue || !searchValue.trim()) {
      setError('Нужно ввести ключевое слово');

      resetSearch();
      return;
    }

    searchNews(searchValue);
  };

  useEffect(() => {
    const searchInput = document.querySelector('.search__input');
    const storageKeyword = localStorage.getItem('keyword') || null;

    if (storageKeyword) {
      searchInput.value = storageKeyword;
    }
  }, []);

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
            placeholder="Введите тему новости"
            className="search__input"
            onChange={handleInputChange}
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
