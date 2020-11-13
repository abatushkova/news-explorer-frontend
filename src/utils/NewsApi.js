import {
  PAGE_SIZE,
  PRAKTIKUM_API_URL,
  API_KEY,
  MONTHS,
} from '../config.js';

class Api {
  constructor() {
    this._decodeDate = this._decodeDate.bind(this);
    this._validateDescription = this._validateDescription.bind(this);
  }

  _decodeDate(numbers) {
    const monthList = MONTHS;

    const date = new Date(numbers);
    const day = date.getDate();
    const year = date.getFullYear();
    const month = monthList[date.getMonth()];

    return `${day} ${month}, ${year}`
  }

  _validateDescription(text) {
    const regex = /https?:\/\/([A-Za-z0-9\-_]+)(:[0-9]+)?(.*)/g;

    return text.replace(regex, ' ');
  }

  fetchNews(keyword) {
    const today = new Date();
    const ts = today.getTime();
    const sevenDays = ts - (7 * 24 * 60 * 60 * 1000);
    const weekAgo = new Date(sevenDays);
    const dateFrom = weekAgo.toISOString();
    const dateTo = today.toISOString();

    return fetch(`${PRAKTIKUM_API_URL}everything?q=${keyword}&from=${dateFrom}&to=${dateTo}&language=ru&pageSize=${PAGE_SIZE}&apiKey=${API_KEY}`)
      .then((res) => res.ok
        ? res.json()
        : Promise.reject(`Ошибка: ${res.status}`)
      )
      .then((data) => {
        const articleList = [];
        const totalResults = data.totalResults;

        data.articles.forEach((article) => {
          articleList.push({
            title: article.title,
            text: article.description ? this._validateDescription(article.description) : '',
            date: this._decodeDate(article.publishedAt),
            source: article.source.name,
            link: article.url,
            image: article.urlToImage,
            keyword: keyword,
          });
        });

        return { articleList, totalResults };
      })
      .catch((err) => console.error(err));
  }
}

const NewsApi = new Api();

export default NewsApi;
