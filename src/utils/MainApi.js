import {
  LOCALHOST,
  BASE_IMAGE_URL,
} from '../config.js';

class Api {

  register({ password, email, name }) {
    return fetch(`${LOCALHOST}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, email, name }),
    })
      .then((res) => res.ok ? res.json() : Promise.reject(res.json()))
      .then((data) => data)
      .catch((err) => err);
  }

  login({ email, password }) {
    return fetch(`${LOCALHOST}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.ok ? res.json() : Promise.reject(res.json()))
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);

          return data;
        }
      })
      .catch((err) => err);
  }

  checkToken(token) {
    return fetch(`${LOCALHOST}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((res) => res.ok ? res.json() : Promise.reject(res.json()))
      .then((data) => data)
      .catch((err) => err);
  }

  getUser(token) {
    return fetch(`${LOCALHOST}/users/me`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((res) => res.ok
        ? res.json()
        : Promise.reject(`Ошибка: ${res.status}`)
      )
      .catch((err) => console.error(`Загрузка информации о пользователе: ${err}`));
  }

  getArticles(token) {
    return fetch(`${LOCALHOST}/articles`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((res) => res.ok
        ? res.json()
        : Promise.reject(`Ошибка: ${res.status}`)
      )
      .catch((err) => console.error(`Загрузка списка статей: ${err}`));
  }

  createArticle(article, token) {
    const {
      title,
      text,
      date,
      source,
      link,
      image,
      keyword
    } = article;

    return fetch(`${LOCALHOST}/articles`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image: image || BASE_IMAGE_URL,
      })
    })
      .then((res) => res.ok
        ? res.json()
        : Promise.reject(res.status)
      )
      .catch((err) => err);
  }

  deleteArticle(articleID, token) {
    return fetch(`${LOCALHOST}/articles/${articleID}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((res) => res.ok
        ? res.json()
        : Promise.reject(`Ошибка: ${res.status}`)
      )
      .catch((err) => console.error(`При удалении статьи: ${err}`));
  }
}

const MainApi = new Api();

export default MainApi;
