import React, { useState, useEffect, useCallback } from 'react';
import './SavedNewsHeader.css';

const SavedNewsHeader = (props) => {
  const {
    savedArticleList,
    currentUser
  } = props;
  const [keywordMax, setKeywordMax] = useState('');
  const [keywordMiddle, setKeywordMiddle] = useState('');
  const [keywordMin, setKeywordMin] = useState('');

  const countArticles = (amount) => {
    if (amount > 100) amount = amount % 100;
    if (amount <= 20 & amount >= 10) return 'сохраненных статей';
    if (amount > 20) amount = amount % 10;

    return amount === 1
      ? 'сохраненная статья'
      : (amount > 1 & amount < 5)
        ? 'сохраненных статьи'
        : 'сохраненных статей';
  };

  const sortFavouriteArticles = useCallback((list) => {
    const keywords = [];
    const counter = {};

    list.map((article) => keywords.push(article.keyword));
    keywords.forEach((word) => {
      counter[word] = (counter[word] || 0) + 1;
    });
    keywords.sort((a, b) => counter[b] - counter[a]);

    const sortedList = Object.values(keywords.reduce((acc, cur) => {
      acc[cur] = acc[cur] || [cur, 0];
      acc[cur][1]++;
      return acc;
    }, {})).map((item) => ({ [item[0]] : item[1] }));

    const keywordMinList = sortedList.slice(2);

    switch (sortedList.length) {
      case 1:
        setKeywordMax(` ${Object.keys(sortedList[0]).join()}`);
        setKeywordMiddle('');
        setKeywordMin('');
        break;
      case 2:
        setKeywordMax(` ${Object.keys(sortedList[0]).join()}`);
        setKeywordMiddle(`, ${Object.keys(sortedList[1]).join()}`);
        setKeywordMin('');
        break;
      case 3:
        setKeywordMax(` ${Object.keys(sortedList[0]).join()}`);
        setKeywordMiddle(`, ${Object.keys(sortedList[1]).join()} `);
        setKeywordMin(` ${Object.keys(keywordMinList[0]).join()}`);
        break;
      default:
        setKeywordMax(` ${Object.keys(sortedList[0]).join()}`);
        setKeywordMiddle(`, ${Object.keys(sortedList[1]).join()} `);
        setKeywordMin(` ${keywordMinList.length} другим`);
        break;
    }
  }, []);

  useEffect(() => {
    if (savedArticleList.length === 0) return;

    sortFavouriteArticles(savedArticleList);
  }, [sortFavouriteArticles, savedArticleList]);

  return (
    <div className="news-header page__section">
      <h1 className="news-header__title">Сохранённые статьи</h1>
      <p className="news-header__intro">
        {currentUser.name}, у вас {savedArticleList.length}
        <br />
        {countArticles(savedArticleList.length)}
      </p>
      {savedArticleList.length === 0 ? (
        null
      ) : (
        <p className="news-header__keywords">
          По ключевым словам:
          <span className="news-header__strong">{keywordMax}</span>
          <span className="news-header__strong">{keywordMiddle}</span>
          {keywordMin !== '' && (
            <>
              и
              <span className="news-header__strong">{keywordMin}</span>
            </>
          )}
        </p>
      )}
    </div>
  );
}

export default SavedNewsHeader;
