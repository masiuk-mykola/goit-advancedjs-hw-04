import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  showLoader,
  clearGallery,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

let userQuery = '';
let page = 1;

const formRef = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

formRef.addEventListener('submit', handleSearch);

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  showLoader();
  await loadImages(page);

  const galleryItem = document.querySelector('.gallery__item');

  if (galleryItem) {
    const { height } = galleryItem.getBoundingClientRect();

    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
  }
});

async function loadImages(page) {
  try {
    const data = await getImagesByQuery(userQuery, page);

    if (!data.hits.length) {
      iziToast.error({
        title: '❌',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);

    showLoadMoreButton();
    if (page * 15 >= data.totalHits) {
      hideLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: '❌',
      message: 'Something went wrong!',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

function handleSearch(event) {
  event.preventDefault();
  hideLoadMoreButton();
  clearGallery();

  const inputValue = event.target[0].value;
  if (!inputValue) return;

  userQuery = inputValue;
  page = 1;

  formRef.reset();
  showLoader();
  loadImages(page);
}
