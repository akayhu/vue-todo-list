import axios from 'axios';

const movieRequest = axios.create({
  baseURL: 'https://api.dazedbear.pro/ajax/movie',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'zvCLtEEJcp2XRNvqiDEuY6OkgOMdUPRm8JlOQyDi'
  }
});

const apiAxios = (method, url, params, response) => {
  movieRequest({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
  }).then(res => {
    response(res);
  }).catch(err => {
    response(err);
  });
};

// 免費活動
export const apiMovieFree = (param, response) => {
  return apiAxios('GET', '/free', param, response);
};

// 熱門活動
export const apiMovieHot = (param, response) => {
  return apiAxios('GET', '/hot', param, response);
};

// 最新活動
export const apiMovieLatest = (param, response) => {
  return apiAxios('GET', '/latest', param, response);
};