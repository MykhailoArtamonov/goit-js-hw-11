import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
export function createGallery(images) {
  gallery.insertAdjacentHTML(
    'beforeend',
    images
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) =>
          `<li><a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}"></a><div>
    <div><span>Likes</span><span>${likes}</span></div>
    <div><span>Views</span><span>${views}</span></div>
    <div><span>Comments</span><span>${comments}</span></div>
    <div><span>Downloads</span><span>${downloads}</span></div>
    </div></li>`
      )
      .join('')
  );
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}
export function showLoader() {
  loader.removeAttribute('hidden');
}
export function hideLoader() {
  loader.setAttribute('hidden', '');
}
