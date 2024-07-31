import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

const form = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const loaderWrapper = document.querySelector('.loader-wrapper');

form.addEventListener('submit', event => {
  event.preventDefault();
  const searchData = searchInput.value.trim();
  gallery.innerHTML = '';

  if (searchData === '') {
    iziToast.error({
      id: 'error',
      message: 'The search field cannot be empty',
      position: 'topRight',
      transitionIn: 'fadeInDown',
    });
    toggleLoader(false);
  } else {
    toggleLoader(true);

    fetchImages(searchData)
      .then(hits => {
        if (hits.length === 0) {
          iziToast.error({
            id: 'error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            transitionIn: 'fadeInDown',
          });
        } else {
          renderGallery(hits);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        iziToast.error({
          id: 'error',
          message:
            'An error occurred while fetching images. Please try again later.',
          position: 'topRight',
          transitionIn: 'fadeInDown',
        });
      })
      .finally(() => {
        toggleLoader(false);
        searchInput.value = '';
      });
  }
});

function toggleLoader(visible) {
  loaderWrapper.style.display = visible ? 'flex' : 'none';
}
