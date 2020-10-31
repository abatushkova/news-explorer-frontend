import React from 'react';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

const SavedNews = () => {
  const mode = JSON.parse(localStorage.getItem('mode'));

  return (
    <>
      <Header mode={mode.BLACK} />
      <main>
        <SavedNewsHeader />
        <NewsCardList
          isSavedNews={true}
        />
      </main>
    </>
  );
};

export default SavedNews;
