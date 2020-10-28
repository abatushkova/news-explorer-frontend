import React, { useEffect, useState } from 'react';
import { ReactComponent as TrashIcon } from '../../images/trash.svg';
import { ReactComponent as BookmarkIcon } from '../../images/bookmark.svg';
import '../../utils/text-ellipsis';
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

  const [text, setText] = useState(description);

  // useEffect(() => {
  //   trimNewsDescription();

  //   function trimNewsDescription() {
  //     const containers = Array.from(document.querySelectorAll('.news__ellipsis-wrapper'));

  //     containers.forEach((container) => {
  //       const paragraph = container.querySelector('.news__description');
  //       const wrapperHeight = container.clientHeight;
  
  //       while (paragraph.offsetHeight > wrapperHeight) {
  //         paragraph.textContent = paragraph.textContent.slice(0, -1);
  //         // paragraph.textContent = paragraph.textContent.replace(/\W*\s(\S)*$/, '...');
  //         setText(paragraph.textContent);
  //       }
  //     });
  //   }
  
  //   window.addEventListener('resize', trimNewsDescription);

  //   return () => window.removeEventListener('resize', trimNewsDescription);
  // }, []);

  return (
    <div className="news">
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
      {/* <div className="news__info news__info_saved">
        <span className="news__label news__keyword">{keyword}</span>
        <button
          type="button"
          className="news__label news__label_active"
        >
          <TrashIcon className="news__icon news__delete" />
        </button>
        <span className="news__label news__popup">Убрать из сохранённых</span>
      </div> */}
      <img
        src={urlToImage}
        alt={title}
        className="news__img"
      />
      <div className="news__text">
        <span className="news__date">{publishedAt}</span>
        <h3 className="news__title">{title}</h3>
        <p className="news__description">{text}</p>
        <p className="news__src">{source}</p>
      </div>
    </div>
  );
}

export default NewsCard;
