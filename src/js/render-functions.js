import { refs } from './refs';
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderQueryList(queryMovies) {
  const markup = queryMovies
    .map(movie => {
      const genres = movie.genres ? movie.genres.join(', ') : 'Undefined'; // Перевіряємо, чи є жанри
      return `<li class="search-movie-item" id="${movie.id}">
              <div class="search-movie-box">
            
                <img
                  class="search-movie-small-img"
                  src="${movie.medium_cover_image}"
                  alt="${movie.title_english}"
                  title="${movie.title_english}"
                />
                <div class ="search-movie-small-img-rt"> <p class="search-movie-descr-txt">IMDb: ${movie.rating}</p></div>
                
                <div class="search-movie-descr">
                  <ul class="search-movie-descr-list">
                    <li class="search-movie-descr-item">
                      <h3 class="search-movie-descr-subtitle">${movie.title_long}</h3>
                      <p class="search-movie-descr-txt">${genres}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>`;
    })
    .join('');

  refs.searchMovieList.insertAdjacentHTML('beforeend', markup);
}

export function renderMovieList(movies) {
  const markup = movies
    .map(movie => {
      const genres = movie.genres ? movie.genres.join(', ') : 'Undefined'; // Перевіряємо, чи є жанри
      return `<li class="last-movie-item" id="${movie.id}">
              <div class="last-movie-box">
            
                <img
                  class="last-movie-small-img"
                  src="${movie.medium_cover_image}"
                  alt="${movie.title_english}"
                  title="${movie.title_english}"
                />
                <div class ="last-movie-small-img-rt"> <p class="last-movie-descr-txt">IMDb: ${movie.rating}</p></div>
                
                <div class="last-movie-descr">
                  <ul class="last-movie-descr-list">
                    <li class="last-movie-descr-item">
                      <h3 class="last-movie-descr-subtitle">${movie.title_long}</h3>
                      <p class="last-movie-descr-txt">${genres}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>`;
    })
    .join('');

  refs.lastMovieList.insertAdjacentHTML('beforeend', markup);
}

export function renderMovieAbout(showMovie) {
  refs.sectionMovieAbout.style.display = 'block';
  const genres = showMovie.genres ? showMovie.genres.join(', ') : 'Undefined'; // Перевіряємо, чи є жанри
  console.log('Жанр:', genres);

  // Перевіряємо, чи є актори
  const actors = showMovie.cast;

  // Формуємо список акторів
  const actorList = actors.length
    ? actors
        .map(actor => `${actor.name} as <u>${actor.character_name}</u>`)
        .join(', ')
    : 'No actors available';

  // Формуємо зображення акторів

  const actorImages = actors.length
    ? actors
        .map(
          actor =>
            `<img src="${actor.url_small_image}" alt="${actor.name}" title="${actor.name}" class="actor-img">`
        )
        .join('')
    : 'No actor images available';

  const markup = `
      <div class="about-movie-title-box">
        <div>
          <h2 class="about-movie-main-title">${showMovie.title_english}</h2>
        </div>
        <div class="about-movie-title-line"></div>
      </div>
      <div class="about-movie-container">
        <div class="about-movie-img">
          <img src="${showMovie.large_cover_image}" alt="${
    showMovie.title_english
  }" title="${showMovie.title_english}" />
          <div class="actor-img-list">
           ${actorImages}
          </div>
        </div>
        <div class="about-movie-box">
          <div class="about-movie-item">
            <h3 class="about-movie-title">${showMovie.title_long}</h3>
              <p class="about-movie-txt"><span>Genres: </span>${genres}</p>
            <p class="about-movie-txt"><span>IMDb rating: </span>${
              showMovie.rating
            }</p>
            <p class="about-movie-txt"><span>Year: </span>${showMovie.year}</p>
            <p class="about-movie-txt">
              <span>Actors: </span>${actorList}
            </p>
            <div class="screen-img">
              <ul class="screen-img-list">
                <li class="screen-img-item">
                <a href="${showMovie.large_screenshot_image1}">

                  <img src="${showMovie.medium_screenshot_image1}" alt="${
    showMovie.title_english
  }" title="${showMovie.title_english}"/></a>
                </li>
                  <li class="screen-img-item">
                     <a href="${showMovie.large_screenshot_image2}">
                  <img src="${showMovie.medium_screenshot_image2}" alt="${
    showMovie.title_english
  }" title="${showMovie.title_english}" /></a>
                </li>
                  <li class="screen-img-item">
                     <a href="${showMovie.large_screenshot_image3}">
                  <img src="${showMovie.medium_screenshot_image3}" alt="${
    showMovie.title_english
  }" title="${showMovie.title_english}" /></a>
                </li>
             
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="about-movie-descr">
        <span>Description: </span>${
          showMovie.description_full || 'Sorry! Movie description not added yet'
        }       
      </p>`;

  refs.boxAboutMovie.innerHTML = markup;

  // Ініціалізація бібліотеки SimpleLightbox
  let galleryBox = new SimpleLightbox('.screen-img-list a', {
    captionsData: 'alt', // Витягує підписи із атрибута alt
    captionDelay: 250, // Затримка появи підпису (в мс)
  });

  // Оновлення SimpleLightbox, для перезавантаження списку елементів
  galleryBox.refresh();
}

export function renderCategoryMovie(categoryMovies) {
  const markup = categoryMovies
    .map(movie => {
      const genres = movie.genres ? movie.genres.join(', ') : 'Undefined'; // Перевіряємо, чи є жанри
      return `<li class="category-movie-item" id="${movie.id}">
              <div class="category-movie-box">
            
                <img
                  class="category-movie-small-img"
                  src="${movie.medium_cover_image}"
                  alt="${movie.title_english}"
                  title="${movie.title_english}"
                />
                <div class ="category-movie-small-img-rt"> <p class="category-movie-descr-txt">IMDb: ${movie.rating}</p></div>
                
                <div class="category-movie-descr">
                  <ul class="category-movie-descr-list">
                    <li class="category-movie-descr-item">
                      <h3 class="category-movie-descr-subtitle">${movie.title_long}</h3>
                      <p class="category-movie-descr-txt">${genres}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>`;
    })
    .join('');

  refs.categoryMovieList.insertAdjacentHTML('beforeend', markup);
}

export function renderTopMovie(topMovies) {
  const markup = topMovies
    .map(movie => {
      const genres = movie.genres ? movie.genres.join(', ') : 'Undefined'; // Перевіряємо, чи є жанри
      return `<li class="top-movie-item" id="${movie.id}">
              <div class="top-movie-box">
            
                <img
                  class="top-movie-small-img"
                  src="${movie.medium_cover_image}"
                  alt="${movie.title_english}"
                  title="${movie.title_english}"
                />
                <div class ="top-movie-small-img-rt"> <p class="top-movie-descr-txt">IMDb: ${movie.rating}</p></div>
                
                <div class="top-movie-descr">
                  <ul class="top-movie-descr-list">
                    <li class="top-movie-descr-item">
                      <h3 class="top-movie-descr-subtitle">${movie.title_long}</h3>
                      <p class="top-movie-descr-txt">${genres}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>`;
    })
    .join('');

  refs.topMovieList.insertAdjacentHTML('beforeend', markup);
}
