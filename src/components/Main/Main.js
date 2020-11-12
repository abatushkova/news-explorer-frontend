import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Author from '../Author/Author';
import NewsCardList from '../NewsCardList/NewsCardList';
import './Main.css';

const Main = (props) => {
  const {
    loggedIn,
    onSaveClick,
    onDeleteClick,
    onSaveClickNotLoggedIn,
  } = props;
  const [keyword, setKeyword] = useState('');

  const resetSearch = () => {
    setKeyword('');
  };

  const searchNews = (searchValue) => {
    localStorage.removeItem('keyword');
    localStorage.removeItem('newsList');
    setKeyword(searchValue);
  };

  useEffect(() => {
    if (!localStorage.getItem('newsList')) return;

    setKeyword(localStorage.getItem('keyword'));
  }, []);

  return (
    <main>
      <SearchForm
        searchNews={searchNews}
        resetSearch={resetSearch}
      />
      {keyword && (
        <NewsCardList
          keyword={keyword}
          loggedIn={loggedIn}
          onSaveClick={onSaveClick}
          onDeleteClick={onDeleteClick}
          onSaveClickNotLoggedIn={onSaveClickNotLoggedIn}
        />
      )}
      <Author />
    </main>
  );
};

export default Main;
