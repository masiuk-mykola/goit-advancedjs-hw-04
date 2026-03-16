import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      image =>
        `<li class="gallery__item"><a class="gallery__link" href="${image.largeImageURL}">
        <img class="gallery__image" loading="lazy" src="${image.webformatURL}" alt="${image.tags}" />
      </a>
       <ul class="caption-list">
        <li class="caption-item">
          <p class="caption">Likes</p>
          <p class="caption-value">${image.likes}</p>
        </li>
        <li class="caption-item">
          <p class="caption">Views</p>
          <p class="caption-value">${image.views}</p>
        </li>
        <li class="caption-item">
          <p class="caption">Comments</p>
          <p class="caption-value">${image.comments}</p>
        </li>
        <li class="caption-item">
          <p class="caption">Comments</p>
          <p class="caption-value">${image.downloads}</p>
        </li>
      </ul></li>`
    )
    .join('');

  gallery.insertAdjacentHTML('afterbegin', markup);
  lightBox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  gallery.classList.add('loading');
}

export function hideLoader() {
  gallery.classList.remove('loading');
}
