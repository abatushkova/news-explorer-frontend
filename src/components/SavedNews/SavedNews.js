import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNewsCardList from '../SavedNewsCardList/SavedNewsCardList';
import MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './SavedNews.css';

const SavedNews = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();
  const savedNewsPage = location.pathname === '/saved-news';
  const {
    savedArticleList,
    onDeleteClick,
  } = props;
  const [storedArticleList, setStoredArticleList] = useState(savedArticleList);

  useEffect(() => {
      MainApi.getArticles(localStorage.getItem('token'))
      .then((res) => setStoredArticleList(res))
      .catch((err) => console.error(err));

  }, [savedArticleList]);

  if (!currentUser) return null;

  return (
    <main>
      <SavedNewsHeader
        savedArticleList={storedArticleList}
        currentUser={currentUser}
      />
      <SavedNewsCardList
        isSavedNewsPage={savedNewsPage}
        savedArticleList={storedArticleList}
        onDeleteClick={onDeleteClick}
      />
    </main>
  );
};

export default SavedNews;
