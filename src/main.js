import {
  querySearchMovies,
  showLastMovies,
  showCategoryMovies,
  showTopMovies,
  fetchMovieDetails,
} from './js/moviesdb-api';
import { renderQueryList } from './js/render-functions';
import { refs } from './js/refs';

import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

showLastMovies();
showCategoryMovies();
showTopMovies();

refs.lastMovieList.addEventListener('click', onMovieClick);
refs.form.addEventListener('submit', onFormSubmit);

refs.searchTxtLoaderMore.style.display = 'none'; // Ховаємо індикатор завантаження
refs.searchBtnLoadMore.style.display = 'none'; // Ховаємо кнопку перед пошуком

let query = ''; // Змінна для збереження пошукового запиту
let page = 1; // Починаємо з першої сторінки
const limit = 10; // Кількість зображень на сторінку
let totalMovies = 'null'; // Загальна кількість сторінок (буде оновлюватися після запиту)

async function onFormSubmit(evt) {
  evt.preventDefault();

  refs.searchMovieList.innerHTML = ''; // Перед пошуком за новим ключовим словом повністю очищаємо попередній вміст галереї
  page = 1; // Скидаємо номер сторінки
  let totalPages = 0; // ⚠️ Обнуляємо загальну кількість сторінок!

  refs.searchBtnLoadMore.style.display = 'none'; // ⚠️ Явно ховаємо кнопку перед запитом

  query = evt.currentTarget.elements.query.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Помилка',
      message: `❌ Введіть в поле пошуку пошукову фразу`,
      position: 'topCenter',
      timeout: 2500,
    });

    return;
  } else {
    refs.searchBtnLoadMoreтзь.style.display = 'none'; // Ховаємо кнопку перед новим пошуком
    refs.searchTxtLoaderMore.style.display = 'block'; // Показуємо індикатор завантаження
    try {
      const { totalMovies, queryMovies } = await querySearchMovies(
        query,
        limit,
        page
      );

      if (!totalMovies) return; // Якщо запит не повернув даних, виходимо
      renderQueryList(queryMovies); // Відмальовуємо знайдені зображення

      totalPages = Math.ceil(totalMovies / limit); // Оновлюємо загальну кількість сторінок
      console.log(`Всього сторінок: ${totalPages}`);

      if (totalPages > 1) {
        refs.searchBtnLoaderBox.style.display = 'block'; // Показуємо кнопку, якщо є більше однієї сторінки
      } else {
        iziToast.info({
          title: 'Увага',
          message: `🔹 Ви досягли кінця результатів пошуку`,
          position: 'topCenter',
          timeout: 5000,
        });
      }
    } catch (error) {
      iziToast.error({
        title: 'Помилка',
        message: `❌ Щось зламалося. Треба звернутись до адміністратора сайту! Або спробуйте ще раз пізніше!`,
        position: 'topCenter',
        timeout: 5000,
      });
    } finally {
      refs.searchTxtLoaderMore.style.display = 'none'; // Сховати індикатор завантаження
    }
  }
  refs.form.reset();
}

// ---- Завантаження наступної сторінки ---- //
async function onSearchBtnLoadMore() {
  page += 1; // Збільшуємо сторінку

  refs.searchBtnLoaderBox.style.display = 'none';
  refs.searchTxtLoaderMore.style.display = 'block';

  try {
    const { totalImages, images } = await queryPixabay(query, page, perPage);
    if (!totalImages) return; // Якщо запит не повернув даних, виходимо
    renderSearchImages(images); // Відмальовуємо знайдені зображення

    totalPages = Math.ceil(totalImages / perPage); // Оновлюємо загальну кількість сторінок

    smoothScroll(); // Скрол після рендеру
    //console.log('Поточна група елементів:', page);
    // console.log('Всього зображень:', totalImages);

    if (page === totalPages) {
      refs.btnLoadMore.style.display = 'none'; // Якщо досягли останньої сторінки - ховаємо кнопку
      iziToast.info({
        title: 'Увага',
        message: `🔹 Ви досягли кінця результатів пошуку.`,
        position: 'topCenter',
        timeout: 5000,
      });
    } else {
      refs.btnLoadMore.style.display = 'block';
    }
  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message: `❌ Щось зламалося. Треба звернутись до адміністратора сайту! Або спробуйте ще раз пізніше!`,
      position: 'topCenter',
      timeout: 5000,
    });
  } finally {
    refs.txtLoaderMore.style.display = 'none';
  }
}

//

function onMovieClick(evt) {
  const movieItem = evt.target.closest('.last-movie-item'); // Шукаємо найближчий li
  if (!movieItem) return; // Виходимо, якщо клік був не по li

  const movieId = movieItem.id; // Отримуємо id
  console.log('Вибраний фільм з id:', movieId);

  // Викликаємо потрібну функцію
  fetchMovieDetails(movieId);
  smoothScroll();
}

function smoothScroll() {
  setTimeout(() => {
    if (!refs.boxAboutMovie) return;

    const lastMovieItem = document.querySelector('.last-movie-list li'); // Всі елементи галереї
    if (!lastMovieItem) {
      console.log('Галерея порожня або ще не завантажилася');
      return;
    }
    console.log('Елемент', lastMovieItem);
    const cardHeight = lastMovieItem.getBoundingClientRect().height; // Висота першого елемента
    console.log('Висота', cardHeight);
    window.scrollBy({ top: -cardHeight * 2, behavior: 'smooth' }); // Прокручуємо
  }, 500); // Чекаємо 500 мс, щоб DOM оновився
}
