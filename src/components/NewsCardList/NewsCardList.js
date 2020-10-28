import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import Button from '../Button/Button';
import temporaryData from '../../utils/temporaryData.json';
import './NewsCardList.css';

const NewsCardList = () => {
  return (
    <section className="news-list">
      <div className="page__section">
        <h2 className="news-list__title">Результаты поиска</h2>
        <div className="news-list__container">
          {temporaryData.map((news) => (
            <NewsCard
              key={news.id}
              data={news}
            />
          ))}
        </div>
        {/* <Preloader /> */}
        {/* <NotFound /> */}
        <Button
          type="button"
          btnClass="news-list__load-btn"
          name="Показать еще"
        />
      </div>
    </section>
  );
}

export default NewsCardList;