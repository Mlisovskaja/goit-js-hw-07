import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector(".gallery");
const galleyMarkup = createGallery(galleryItems);


galleryBox.insertAdjacentHTML('afterbegin', galleyMarkup);

console.log(createGallery(galleryItems));
function createGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
            `;
        })
        .join("");
};

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
