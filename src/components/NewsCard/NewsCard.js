import React, { useEffect, useState, useCallback } from 'react';
import './NewsCard.css';

const NewsCard = ({ ...props }) => {
  const {
    isSavedNewsPage,
    loggedIn,
    onSaveClick,
    onDeleteClick,
    openRegisterPopup,
    news,
  } = props;

  const [isArticleSaved, setIsArticleSaved] = useState(false);

  const saveArticleToLocal = (article) => {
    const localArticleList = localStorage.getItem('localArticleList');
    const savedArticleList = localArticleList ? JSON.parse(localArticleList) : [];

    savedArticleList.push(article);
    localStorage.setItem('localArticleList', JSON.stringify(savedArticleList));
  };

  const removeArticleFromLocal = (article) => {
    let entry;
    const list = JSON.parse(localStorage.getItem('localArticleList'));
    list.forEach((item, index) => {
      if (item._id === article._id) {
        entry = index;
      }
    })

    list.splice(entry, 1);
    localStorage.setItem('localArticleList', JSON.stringify(list));
  };

  const handleSaveClick = (evt) => {
    evt.preventDefault();

    if (!loggedIn) {
      openRegisterPopup();
      return;
    };

    const bookmark = evt.target;

    onSaveClick(news)
      .then((res) => {
        setIsArticleSaved(true);
        saveArticleToLocal(res);
        bookmark.blur();
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteClick = (evt) => {
    evt.preventDefault();

    const bookmark = evt.target;
    const list = JSON.parse(localStorage.getItem('localArticleList'));

    list.forEach((item) => {
        if (news.link === item.link) {
          onDeleteClick(item._id)
            .then((article) => {
              setIsArticleSaved(false);
              bookmark.blur();
              removeArticleFromLocal(article);
            })
            .catch((err) => console.error(err));
        }
    });
  };

  const renderSavedBookmark = useCallback(() => {
    if (localStorage.getItem('localArticleList')) {
      const list = JSON.parse(localStorage.getItem('localArticleList'));

      list.forEach((item) => {
        if (news.link !== item.link) return;

        setIsArticleSaved(true);
      });
    }
  }, [news.link]);

  useEffect(() => {
    renderSavedBookmark();
  }, [renderSavedBookmark]);

  return (
    <a
      href={news.link}
      className="news"
      target="_blank"
      rel="noopener noreferrer"
    >
    {!isSavedNewsPage ? (
      <>
        <div className="news__info">
          {(isArticleSaved & loggedIn) ? (
            <button
              type="button"
              className="news__label news__icon news__bookmark news__bookmark_saved"
              onClick={handleDeleteClick}
            ></button>
          ) : (
            <button
              type="button"
              className="news__label news__icon news__bookmark"
              onClick={handleSaveClick}
            ></button>
          )}
          {!loggedIn && (
            <span className="news__label news__popup">Войдите, чтобы сохранять статьи</span>
          )}
        </div>
        {news.image === null ? (
          <span className="news__img"></span>
        ) : (
          <img
            src={news.image}
            alt={news.title}
            className="news__img"
          />
        )}
      </>
    ) : (
      <>
        <div className="news__info news__info_saved">
          <span className="news__label news__keyword">{news.keyword}</span>
          <button
            type="button"
            className="news__label news__icon news__delete"
            onClick={handleDeleteClick}
          ></button>
          <span className="news__label news__popup">Убрать из сохранённых</span>
        </div>
        <img
          src={news.image}
          alt={news.title}
          className="news__img"
        />
      </>
    )}
      <div className="news__text">
        <span className="news__date">{news.date}</span>
        <h3 className="news__title">{news.title}</h3>
        <p className="news__description">{news.text}</p>
        <p className="news__src">{news.source}</p>
      </div>
    </a>
  );
}

export default NewsCard;
