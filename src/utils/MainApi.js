class Api {
  constructor({ baseUrl, token }) {
    this._baseUrl = baseUrl;
    this._token = token;
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this._token}`,
      },
    })
      .then((res) => res.ok
        ? res.json()
        : Promise.reject(`Ошибка: ${res.status}`)
      )
      .catch((err) => console.error(`Загрузка информации о пользователе: ${err}`));
  }
}

const MainApi = new Api({
  baseUrl: 'http://localhost:8080',
  token: localStorage.getItem('token')
});

export default MainApi;
