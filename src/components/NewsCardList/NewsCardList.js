import React, { useEffect, useState, useCallback } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import Button from '../Button/Button';
import NewsApiError from '../NewsApiError/NewsApiError';
import NewsApi from '../../utils/NewsApi';
import { PAGE_SIZE, PAGE_COUNTER } from '../../config.js';
import './NewsCardList.css';

const NewsCardList = (props) => {
  const {
    keyword,
    loggedIn,
    onSaveClick,
    onDeleteClick,
    onSaveClickNotLoggedIn,
  } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isNewsApiError, setIsNewsApiError] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [hideBtn, setHideBtn] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [news100List, setNews100List] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const [lastIndex, setLastIndex] = useState(0);

  const renderNews = useCallback((articleList, totalResults) => {
    setNews100List((news100List) => news100List.concat(articleList));
    setNewsList((newsList) => newsList.concat(articleList.slice(lastIndex, PAGE_COUNTER)));
    setLastIndex((lastIndex) => lastIndex + PAGE_COUNTER);
    setTotalResults(totalResults);
    setIsLoading(false);
    setIsFetched(true);
    setHideBtn(false);
  }, []);

  const addNews = (evt) => {
    evt.target.blur();

    setNewsList(newsList.concat(news100List.slice(lastIndex, lastIndex + PAGE_COUNTER)));
    setLastIndex((lastIndex) => lastIndex + PAGE_COUNTER);
  };

  const resetState = useCallback(() => {
    setIsNotFound(false);
    setIsNewsApiError(false);
    setIsFetched(false);
    setHideBtn(true);
    setNews100List([]);
    setNewsList([]);
    setLastIndex(0);
  }, []);

  useEffect(() => {
    if (localStorage.getItem('freshNewsList')) {
      setIsLoading(true);
      setLastIndex(0);

      const storedNewsList = JSON.parse(localStorage.getItem('freshNewsList'));
      const storedTotalResults = storedNewsList.length;

      renderNews(storedNewsList, storedTotalResults);
      return;
    }

    resetState();
    setIsLoading(true);

    NewsApi.fetchNews(keyword)
      .then((res) => {
        if (!res) {
          return Promise.reject(new Error('Ошибка запроса'));
        }

        const { articleList, totalResults } = res;

        if (totalResults === 0) {
          setIsLoading(false);
          setIsFetched(false);
          setIsNotFound(true);
          return;
        }

        localStorage.setItem('freshNewsList', JSON.stringify(articleList));
        localStorage.setItem('keyword', keyword);
        renderNews(articleList, totalResults);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsFetched(false);
        setHideBtn(true);
        setIsNewsApiError(true);

        console.error(err);
      });

    return () => {
      resetState();
    }
  }, [keyword, renderNews, resetState]);

  useEffect(() => {
    if (
      totalResults === 3
      || lastIndex >= PAGE_SIZE
      || lastIndex >= totalResults
    ) {
      setHideBtn(true);
      return;
    }

    setHideBtn(false);
  }, [lastIndex, totalResults]);

  return (
    <section className="news-list">
      {isLoading && <Preloader />}
      {isNotFound && <NotFound />}
      {isNewsApiError && <NewsApiError />}
      {isFetched && (
        <div className="news-list__section page__section">
          <h2 className="news-list__title">Результаты поиска</h2>
          <div className="news-list__container">
            {newsList.map((news, index) => (
              <NewsCard
                key={news.title + index}
                news={news}
                loggedIn={loggedIn}
                onSaveClick={onSaveClick}
                onDeleteClick={onDeleteClick}
                openRegisterPopup={onSaveClickNotLoggedIn}
              />
            ))}
          </div>
          {!hideBtn && (
            <Button
              type="button"
              btnClass="news-list__load-btn"
              name="Показать еще"
              clickHandler={addNews}
            />
          )}
        </div>
      )}
    </section>
  );
}

export default NewsCardList;
