import React from 'react';
import { useLocation } from 'react-router-dom';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

const SavedNews = () => {
  const location = useLocation();
  const savedNewsPage = location.pathname === '/saved-news';

  return (
    <main>
      <SavedNewsHeader />
      <NewsCardList
        isSavedNews={savedNewsPage}
      />
    </main>
  );
};

export default SavedNews;
