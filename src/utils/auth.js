export const BASE_URL = 'http://localhost:8080';
// export const BASE_URL = 'https://api.the-news.students.nomoreparties.co';

export const register = ({ password, email, name }) => {
  return fetch(`${BASE_URL}/signup`, {
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
};

export const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
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
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
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
};
