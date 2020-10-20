import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import './SavedNews.css';

const SavedNews = () => {
  return (
    <div className="">
      <SavedNewsHeader />
      <NewsCardList />
    </div>
  );
};

export default SavedNews;
