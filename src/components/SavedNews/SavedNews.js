import React from 'react';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

const SavedNews = () => {
  return (
    <>
      <Header />
      <main>
        <SavedNewsHeader />
        <NewsCardList />
      </main>
    </>
  );
};

export default SavedNews;
