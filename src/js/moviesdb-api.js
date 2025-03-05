//import { refs } from './refs';
import {
  renderMovieList,
  renderCategoryMovie,
  renderTopMovie,
  renderMovieAbout,
} from './render-functions';
import axios from 'axios';

export async function querySearchMovies(query, limit, page) {
  const BASE_URL =
    'https://movie-database-api1.p.rapidapi.com/list_movies.json';
  const END_POINT = '';

  const params = new URLSearchParams({
    limit: limit,
    page: page,
    quality: 'all',
    genre: 'all',
    minimum_rating: '0',
    query_term: query,
    sort_by: 'year',
    order_by: 'desc',
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  const headers = {
    'x-rapidapi-key': '0eebb25122mshd6b10152edde993p1dd392jsn360216e9620b',
    'x-rapidapi-host': 'movie-database-api1.p.rapidapi.com',
  };

  try {
    const resQuery = await axios.get(url, { headers });

    const queryMovies = resQuery.data.data.movies; // Повертаємо отримані
    const totalMovies = resQuery.data.data.movie_count;

    return { queryMovies, totalMovies };
  } catch (error) {
    console.error('Помилка отримання даних:', error);
  }
}

export async function showLastMovies() {
  const BASE_URL =
    'https://movie-database-api1.p.rapidapi.com/list_movies.json';
  const END_POINT = '';

  const params = new URLSearchParams({
    limit: '20',
    page: '1',
    quality: 'all',
    genre: 'all',
    minimum_rating: '0',
    query_term: '0',
    sort_by: 'year',
    order_by: 'desc',
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  const headers = {
    'x-rapidapi-key': '0eebb25122mshd6b10152edde993p1dd392jsn360216e9620b',
    'x-rapidapi-host': 'movie-database-api1.p.rapidapi.com',
  };

  try {
    const response = await axios.get(url, { headers });

    const movies = response.data.data.movies; // Повертаємо отримані
    console.log(movies); // Виведе повні дані у консоль

    renderMovieList(movies);

    // return movies;
  } catch (error) {
    console.error('Помилка отримання даних:', error);
  }
}

export async function fetchMovieDetails(movieId) {
  // Тут можна написати логіку отримання деталей фільму за id
  console.log(`Завантажуємо деталі для фільму з id: ${movieId}`);

  const BASE_URL =
    'https://movie-database-api1.p.rapidapi.com/movie_details.json';
  const END_POINT = '';

  const params = new URLSearchParams({
    movie_id: movieId,
    with_images: 'true',
    with_cast: 'true',
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  const headers = {
    'x-rapidapi-key': '0eebb25122mshd6b10152edde993p1dd392jsn360216e9620b',
    'x-rapidapi-host': 'movie-database-api1.p.rapidapi.com',
  };

  try {
    const res = await axios.get(url, { headers });

    const showMovie = res.data.data.movie; // Повертаємо отримані
    console.log('показуємо опис фільму', showMovie); // Виведе повні дані у консоль

    renderMovieAbout(showMovie);
  } catch (error) {
    console.error('Помилка отримання даних:', error);
  }
}

export async function showCategoryMovies() {
  const BASE_URL =
    'https://movie-database-api1.p.rapidapi.com/list_movies.json';
  const END_POINT = '';

  const params = new URLSearchParams({
    limit: '5',
    page: '1',
    quality: 'all',
    genre: 'Comedy',
    minimum_rating: '0',
    query_term: '0',
    sort_by: 'date_added',
    order_by: 'desc',
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  const headers = {
    'x-rapidapi-key': '0eebb25122mshd6b10152edde993p1dd392jsn360216e9620b',
    'x-rapidapi-host': 'movie-database-api1.p.rapidapi.com',
  };

  try {
    const resCategory = await axios.get(url, { headers });

    const categoryMovies = resCategory.data.data.movies; // Повертаємо отримані
    console.log(categoryMovies); // Виведе повні дані у консоль

    renderCategoryMovie(categoryMovies);
  } catch (error) {
    console.error('Помилка отримання даних:', error);
  }
}

export async function showTopMovies() {
  const BASE_URL =
    'https://movie-database-api1.p.rapidapi.com/list_movies.json';
  const END_POINT = '';

  const params = new URLSearchParams({
    limit: '5',
    page: '1',
    quality: 'all',
    genre: 'all',
    minimum_rating: '8',
    query_term: '0',
    sort_by: 'year',
    order_by: 'desc',
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  const headers = {
    'x-rapidapi-key': '0eebb25122mshd6b10152edde993p1dd392jsn360216e9620b',
    'x-rapidapi-host': 'movie-database-api1.p.rapidapi.com',
  };

  try {
    const resTop = await axios.get(url, { headers });

    const topMovies = resTop.data.data.movies; // Повертаємо отримані
    console.log(topMovies); // Виведе повні дані у консоль

    renderTopMovie(topMovies);
  } catch (error) {
    console.error('Помилка отримання даних:', error);
  }
}
