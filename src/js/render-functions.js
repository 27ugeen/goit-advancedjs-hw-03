import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(imageArray) {
  const galleryContainer = document.querySelector('.gallery');

  if (!galleryContainer) {
    console.error('Gallery container not found');
    return;
  }

  galleryContainer.innerHTML = imageArray.map(generateGalleryItemHTML).join('');
  initializeLightbox();
}

function generateGalleryItemHTML(image) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = image;
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}"
          data-source="${largeImageURL}"
          alt="${tags}"
        />
        <div class="image-details">
          ${generateDetailElementHTML('Likes', likes)}
          ${generateDetailElementHTML('Views', views)}
          ${generateDetailElementHTML('Comments', comments)}
          ${generateDetailElementHTML('Downloads', downloads)}
        </div>
      </a>
    </li>`;
}

function generateDetailElementHTML(title, value) {
  return `
    <div class="details-element">
      <p class="details-title">${title}</p>
      <p class="details-value">${value}</p>
    </div>`;
}

function initializeLightbox() {
  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.on('show.simplelightbox', function (e) {
    e.preventDefault();
  });

  lightbox.on('error.simplelightbox', function (e) {
    console.log(e); // some usefull information
  });

  lightbox.refresh();
}
