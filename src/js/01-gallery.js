// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const GalleryAll = document.querySelector('.gallery');
const GalleryItems = CreateGalleryItems(galleryItems);
GalleryAll.insertAdjacentHTML('beforeend', GalleryItems)

function CreateGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
      return ` <div class="gallery__box">
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" loading ='lazy' src="${ preview}" alt="${description}" />
</a>
</div> `;
    }).join('')
} 
const lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt',captionDelay:'250' });