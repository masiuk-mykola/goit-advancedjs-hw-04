import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  showLoader,
  clearGallery,
  hideLoader,
} from './js/render-functions.js';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  const inputValue = event.target[0].value;
  showLoader();

  getImagesByQuery(inputValue)
    .then(data => {
      if (!data.hits.length) {
        iziToast.error({
          title: '❌',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      clearGallery();
      createGallery(data.hits);
      formRef.reset();
    })
    .catch(error =>
      iziToast.error({
        title: '❌',
        message: 'Something went wrong!',
        position: 'topRight',
      })
    )
    .finally(() => {
      hideLoader();
    });
}
