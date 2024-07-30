const apiKey = '14594113-3565582ddf884392468dadf7f';
const apiUrl = 'https://pixabay.com/api/';

export function fetchImages(searchQuery) {
  const searchParams = new URLSearchParams({
    key: apiKey,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${apiUrl}?${searchParams}`;

  toggleLoader(true);

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      return data.hits;
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      return [];
    })
    .finally(() => {
      toggleLoader(false);
    });
}

function toggleLoader(isLoading) {
  document.querySelector('.loader').style.display = isLoading
    ? 'inline-block'
    : 'none';
  document.querySelector('.gallery').style.display = isLoading
    ? 'none'
    : 'flex';
}
