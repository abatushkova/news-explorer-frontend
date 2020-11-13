import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './SavedNewsCardList.css';

const SavedNewsCardList = (props) => {
  const {
    isSavedNewsPage,
    onDeleteClick,
    savedArticleList,
  } = props;

  return (savedArticleList.length !== 0 && (
    <section className="saved-news-list">
      <div className="saved-news-list__section page__section">
        <div className="saved-news-list__container">
            {savedArticleList.map((news, index) => (
              <NewsCard
                key={news.title + index}
                news={news}
                isSavedNewsPage={isSavedNewsPage}
                onDeleteClick={onDeleteClick}
              />
            ))}
        </div>
      </div>
    </section>
  ));
}

export default SavedNewsCardList;
