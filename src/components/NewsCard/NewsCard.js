import React from 'react';
import { ReactComponent as TrashIcon } from '../../images/trash.svg';
import { ReactComponent as BookmarkIcon } from '../../images/bookmark.svg';
import './NewsCard.css';

const NewsCard = (props) => {
  const {
    urlToImage,
    publishedAt,
    title,
    description,
    source,
    keyword
  } = props.data;
  const { isSavedNews } = props;

  return (
    <div className="news">
      {isSavedNews ? (
        <div className="news__info news__info_saved">
          <span className="news__label news__keyword">{keyword}</span>
          <button
            type="button"
            className="news__label news__label_active"
          >
            <TrashIcon className="news__icon news__delete" />
          </button>
          <span className="news__label news__popup">Убрать из сохранённых</span>
        </div>
      ) : (
        <div className="news__info">
          {/* <button
            type="button"
            className="news__label"
          >
            <BookmarkIcon className="news__icon news__bookmark news__bookmark_saved" />
          </button> */}
          <button
            type="button"
            className="news__label news__label_active"
          >
            <BookmarkIcon className="news__icon news__bookmark" />
          </button>
          <span className="news__label news__popup">Войдите, чтобы сохранять статьи</span>
        </div>
      )}
      <img
        src={urlToImage}
        alt={title}
        className="news__img"
      />
      <div className="news__text">
        <span className="news__date">{publishedAt}</span>
        <h3 className="news__title">{title}</h3>
        <p className="news__description">{description}</p>
        <p className="news__src">{source}</p>
      </div>
    </div>
  );
}

export default NewsCard;
