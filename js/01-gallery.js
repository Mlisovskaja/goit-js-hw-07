import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector(".gallery");
const galleyMarkup = createGallery(galleryItems);


galleryBox.insertAdjacentHTML('afterbegin', galleyMarkup);
galleryBox.addEventListener('click', onImgClick);

console.log(createGallery(galleryItems));
function createGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
                <a class="gallery__link"
                    href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>
            `;
        })
        .join("");
};


function onImgClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
    const instance = basicLightbox.create(`
        <div class="modal"> 
        <img src="${event.target.dataset.source}">
        </div>
       `, {
        onShow: (instance) => {
            instance.element().querySelector(".modal").onclick = instance.close
           }
    })

    instance.show();
}



